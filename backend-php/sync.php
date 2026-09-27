<?php
require_once __DIR__ . '/db.php';

// ─── Read Request ───
$method = $_SERVER['REQUEST_METHOD'];

// For POST requests, read JSON body
$input = [];
if ($method === 'POST') {
    $raw = file_get_contents('php://input');
    $input = json_decode($raw, true) ?? [];
}

// ─── Determine Action ───
$action = '';
if ($method === 'GET') {
    $action = $_GET['action'] ?? '';
    // Fallback: if no action but phone param exists, assume 'get'
    if (empty($action) && !empty($_GET['phone'])) {
        $action = 'get';
    }
} elseif ($method === 'POST') {
    $action = $input['action'] ?? '';
    // Fallback: infer action from POST payload structure
    if (empty($action) && !empty($input['phone'])) {
        if (isset($input['data']) || isset($input['backupData']) || isset($input['appState'])) {
            $action = 'save';
        } else {
            $action = 'login';
        }
    }
}

// ─── Route Actions ───
switch ($action) {

    // ── Login / Register ──
    case 'login':
        handleLogin($pdo, $input);
        break;

    // ── Get User Data ──
    case 'get':
        handleGet($pdo);
        break;

    // ── Save User Data ──
    case 'save':
        handleSave($pdo, $input);
        break;

    default:
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Invalid or missing action. Use: login, get, save'
        ]);
        break;
}

// ══════════════════════════════════════════════
// ─── Deep Merge Engine (Conflict-Free Sync) ───
// Replaces the old "Last Write Wins" array_merge() overwrite strategy.
// Device A logging study time and Device B editing the profile can no
// longer destroy each other's data: arrays are union-merged by unique
// identity, objects are merged recursively, scalars are resolved via
// timestamps / version counters, and empty incoming collections never
// clobber non-empty stored ones.
// ══════════════════════════════════════════════

/**
 * Extract a stable unique identity for an array element so duplicates can be
 * removed when merging device blobs. Falls back to a content fingerprint.
 */
function recordIdentity($rec): string
{
    if (!is_array($rec)) {
        return is_scalar($rec) ? 's:' . md5((string) $rec) : 'x:' . md5(json_encode($rec));
    }
    foreach (['id', 'uuid', '_id', 'sessionId', 'session_id', 'logId', 'roomCode', 'code'] as $idf) {
        if (isset($rec[$idf]) && is_scalar($rec[$idf]) && (string) $rec[$idf] !== '') {
            return 'k:' . $idf . ':' . strtolower((string) $rec[$idf]);
        }
    }
    // Content-based fallback: date + time + subject (+ duration) uniquely
    // identifies a study session across devices without needing client IDs.
    $sig = '';
    foreach (['date', 'dateStr', 'startTime', 'start', 'timestamp', 'subject', 'duration', 'minutes'] as $f) {
        if (isset($rec[$f]) && is_scalar($rec[$f])) $sig .= $f . '=' . (string) $rec[$f] . ';';
    }
    return $sig !== '' ? 'c:' . md5($sig) : 'h:' . md5(json_encode($rec, JSON_UNESCAPED_UNICODE));
}

/**
 * Pull a comparable "last modified" timestamp (ms epoch preferred) out of a
 * record or blob; returns null when nothing usable is present.
 */
function extractTimestamp($src): ?int
{
    if (!is_array($src)) return null;
    foreach (['updatedAt', 'updated_at', 'lastModified', 'last_modified', 'timestamp', 'savedAt', 'exportedAt'] as $f) {
        if (!isset($src[$f])) continue;
        $v = $src[$f];
        if (is_numeric($v)) {
            $n = (int) $v;
            return $n > 0 ? ($n < 1e11 ? $n * 1000 : $n) : null; // seconds -> ms
        }
        if (is_string($v)) {
            $t = strtotime($v);
            if ($t !== false) return $t * 1000;
        }
    }
    return null;
}

/**
 * Union-merge two arrays of records: keep every element from both sides,
 * deduplicate by recordIdentity(). On identity collision the fresher record
 * wins (timestamp-aware), otherwise the incoming (device) copy wins because
 * it is the delta being pushed.
 */
function mergeRecordArrays(array $existing, array $incoming): array
{
    $byId = [];
    foreach ($existing as $rec) {
        if ($rec === null) continue;
        $byId[recordIdentity($rec)] = ['rec' => $rec, 'ts' => extractTimestamp($rec)];
    }
    foreach ($incoming as $rec) {
        if ($rec === null) continue;
        $key = recordIdentity($rec);
        $ts  = extractTimestamp($rec);
        if (!isset($byId[$key])) {
            $byId[$key] = ['rec' => $rec, 'ts' => $ts];
            continue;
        }
        $prevTs = $byId[$key]['ts'];
        // Fresher incoming record replaces stored one; equal/unknown ts also
        // lets incoming win (it carries the local edits we just made).
        if ($ts === null || $prevTs === null || $ts >= $prevTs) {
            $byId[$key] = ['rec' => $rec, 'ts' => $ts];
        }
    }
    return array_values(array_map(static fn($e) => $e['rec'], $byId));
}

/**
 * Recursively merge $incoming on top of $existing:
 *  - arrays of records  -> union + dedupe (never overwrite with [])
 *  - associative objects-> deep merge
 *  - scalars            -> incoming wins ONLY if it is non-empty AND not
 *                          demonstrably older than the stored value.
 */
function deepMergeData($existing, $incoming, int $depth = 0)
{
    // Scalars / primitives: fresh-wins with stale-write protection.
    if (!is_array($incoming) || !is_array($existing)) {
        if (is_array($existing) && !is_array($incoming)) {
            // Don't let a scalar/null erase structured stored data.
            return ($incoming === null || $incoming === '' || $incoming === false) ? $existing : $incoming;
        }
        return $incoming;
    }

    // Both are lists of records (study_logs, rooms, sessions, ...):
    // union-merge them, preserving existing data when incoming is empty.
    $existingIsList = array_keys($existing) === range(0, count($existing) - 1);
    $incomingIsList = array_keys($incoming) === range(0, count($incoming) - 1);
    if ($existingIsList && $incomingIsList) {
        if (empty($incoming)) return $existing;   // never overwrite arrays with empty ones
        if (empty($existing)) return $incoming;
        return mergeRecordArrays($existing, $incoming);
    }

    // Mixed list/map shapes: fall through to key-wise merge below.

    // Guard against pathological recursion depth.
    if ($depth > 24) return $incoming;

    $result = $existing;
    foreach ($incoming as $k => $v) {
        if (!array_key_exists($k, $result)) {
            $result[$k] = $v;
            continue;
        }
        $ev = $result[$k];

        if (is_array($ev) && is_array($v)) {
            $result[$k] = deepMergeData($ev, $v, $depth + 1);
            continue;
        }

        // Scalar conflict resolution:
        // 1) explicit version counters (_version / version): higher wins.
        // 2) container-level timestamps: ignore writes older than stored data.
        // 3) placeholder sentinels ('کاربر پلنکس', empty strings): never win.
        if (is_string($v) && $v !== '' && is_string($ev) && $ev !== '' && $v !== $ev) {
            if ($k === '_version' || $k === 'version') {
                $result[$k] = ((int) $v >= (int) $ev) ? $v : $ev;
                continue;
            }
            if ($k === 'name' && ($v === 'کاربر پلنکس' || $v === 'دانش‌آموز پرتلاش' || $v === 'داوطلب پرتلاش')) {
                continue; // placeholders never overwrite a real stored name
            }
        }
        if (($v === '' || $v === null) && $ev !== '' && $ev !== null) {
            continue; // empty incoming must not erase stored values
        }
        $result[$k] = $v;
    }
    return $result;
}

/**
 * Stale-write rejection at the document level. Returns true when the incoming
 * push is provably older than what is already stored (both sides carry a
 * timestamp and incoming._version is not newer).
 */
function isIncomingStale(array $existing, array $incoming): bool
{
    $incVer = isset($incoming['_version']) ? (int) $incoming['_version'] : null;
    $exVer  = isset($existing['_version'])  ? (int) $existing['_version']  : null;
    if ($incVer !== null && $exVer !== null && $incVer < $exVer) return true;

    $incTs = extractTimestamp($incoming);
    $exTs  = extractTimestamp($existing);
    if ($incTs !== null && $exTs !== null && $incTs < $exTs && ($incVer === null || $incVer <= $exVer)) {
        return true;
    }
    return false;
}

/**
 * Apply the full deep-merge pipeline for one user document and stamp the
 * resulting version/timestamp used for future concurrency checks.
 */
function mergeUserDocument(array $existing, array $incoming): array
{
    if (isIncomingStale($existing, $incoming)) {
        // Reject the stale overwrite but still fold in any genuinely-new
        // collection records (they are keyed/deduped, so this is safe).
        $safe = [];
        foreach (['study_logs', 'rooms'] as $coll) {
            if (isset($incoming[$coll]) && is_array($incoming[$coll]) && !empty($incoming[$coll])) {
                $safe[$coll] = $incoming[$coll];
            }
        }
        $merged = empty($safe) ? $existing : deepMergeData($existing, $safe);
    } else {
        $merged = deepMergeData($existing, $incoming);
    }

    $newVersion = max(
        isset($existing['_version']) ? (int) $existing['_version'] : 0,
        isset($incoming['_version']) ? (int) $incoming['_version'] : 0
    ) + 1;
    $merged['_version']  = $newVersion;
    $merged['updatedAt'] = (int) round(microtime(true) * 1000);
    return $merged;
}

// ══════════════════════════════════════════════
// ─── Handler Functions ───
// ══════════════════════════════════════════════

/**
 * Login / Register
 * POST { "action": "login", "phone": "09xxxxxxxxx" }
 * → Creates user if not exists, returns user info.
 */
function handleLogin(PDO $pdo, array $input): void
{
    $phone = trim($input['phone'] ?? '');
    $password = trim($input['password'] ?? '');

    if (empty($phone)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Phone number is required']);
        return;
    }

    // Check if user exists
    $stmt = $pdo->prepare("SELECT id, phone, data, created_at, updated_at FROM users WHERE phone = :phone LIMIT 1");
    $stmt->execute([':phone' => $phone]);
    $user = $stmt->fetch();

    if ($user) {
        // Decode existing stored data
        $storedData = json_decode($user['data'], true) ?: [];

        // If client sent backup data, merge and update
        $incomingData = [];
        if (!empty($input['backupData'])) $incomingData['backupData'] = $input['backupData'];
        if (!empty($input['study_logs'])) $incomingData['study_logs'] = $input['study_logs'];
        if (!empty($input['rooms'])) $incomingData['rooms'] = $input['rooms'];
        if (!empty($input['name'])) $incomingData['name'] = $input['name'];
        if (!empty($input['avatar'])) $incomingData['avatar'] = $input['avatar'];
        if (!empty($input['avatar_url'])) $incomingData['avatar_url'] = $input['avatar_url'];

        if (!empty($incomingData)) {
            // DEEP MERGE (no more Last-Write-Wins overwrite on login either)
            $mergedData = mergeUserDocument($storedData, $incomingData);
            // IDENTITY GUARD: the freshest client-sent name/avatar must win and be
            // persisted at the TOP LEVEL of the stored data column.
            if (!empty($input['name']))       $mergedData['name']       = $input['name'];
            if (!empty($input['avatar']))     $mergedData['avatar']     = $input['avatar'];
            if (!empty($input['avatar_url'])) $mergedData['avatar_url'] = $input['avatar_url'];
            $stmt = $pdo->prepare("UPDATE users SET data = :data, updated_at = NOW() WHERE phone = :phone");
            $stmt->execute([
                ':data'  => json_encode($mergedData, JSON_UNESCAPED_UNICODE),
                ':phone' => $phone
            ]);
            $storedData = $mergedData;
        }

        $userName = $storedData['name'] ?? $input['name'] ?? 'کاربر پلنکس';
        $userAvatar = $storedData['avatar_url'] ?? $storedData['avatar'] ?? $input['avatar_url'] ?? '';

        echo json_encode([
            'success'    => true,
            'message'    => 'Login successful',
            'user'       => [
                'id'         => (int) $user['id'],
                'phone'      => $user['phone'],
                'name'       => $userName,
                'avatar_url' => $userAvatar
            ],
            'backupData' => $storedData['backupData'] ?? null,
            'study_logs' => $storedData['study_logs'] ?? [],
            'rooms'      => $storedData['rooms'] ?? []
        ]);
    } else {
        // Register new user with incoming data
        $newData = [];
        if (!empty($input['backupData'])) $newData['backupData'] = $input['backupData'];
        if (!empty($input['study_logs'])) $newData['study_logs'] = $input['study_logs'];
        if (!empty($input['rooms'])) $newData['rooms'] = $input['rooms'];
        if (!empty($input['name'])) $newData['name'] = $input['name'];
        if (!empty($input['avatar'])) $newData['avatar'] = $input['avatar'];
        if (!empty($input['avatar_url'])) $newData['avatar_url'] = $input['avatar_url'];

        $stmt = $pdo->prepare("INSERT INTO users (phone, data, created_at, updated_at) VALUES (:phone, :data, NOW(), NOW())");
        $stmt->execute([
            ':phone' => $phone,
            ':data'  => json_encode($newData, JSON_UNESCAPED_UNICODE)
        ]);

        $newId = $pdo->lastInsertId();

        echo json_encode([
            'success'    => true,
            'message'    => 'User registered successfully',
            'user'       => [
                'id'         => (int) $newId,
                'phone'      => $phone,
                'name'       => $input['name'] ?? 'کاربر پلنکس',
                'avatar_url' => $input['avatar_url'] ?? ''
            ],
            'backupData' => $newData['backupData'] ?? null,
            'study_logs' => $newData['study_logs'] ?? [],
            'rooms'      => $newData['rooms'] ?? []
        ]);
    }
}

/**
 * Get User Data
 * GET ?action=get&phone=09xxxxxxxxx
 * → Returns user data as JSON.
 */
function handleGet(PDO $pdo): void
{
    $phone = trim($_GET['phone'] ?? '');

    if (empty($phone)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Phone number is required']);
        return;
    }

    $stmt = $pdo->prepare("SELECT id, phone, data, created_at, updated_at FROM users WHERE phone = :phone LIMIT 1");
    $stmt->execute([':phone' => $phone]);
    $user = $stmt->fetch();

    if ($user) {
        // Decode the JSON data field
        $storedData = json_decode($user['data'], true) ?: [];

        $userName = $storedData['name'] 
            ?? ($storedData['backupData']['planex_user_nickname'] ?? null)
            ?? ($storedData['backupData']['planex_user_profile']['name'] ?? null)
            ?? ($storedData['backupData']['planex_user_profile']['nickname'] ?? null)
            ?? 'کاربر پلنکس';

        $userAvatar = $storedData['avatar_url'] 
            ?? ($storedData['avatar'] ?? null)
            ?? ($storedData['backupData']['planex_user_avatar'] ?? null)
            ?? ($storedData['backupData']['planex_user_profile']['avatar'] ?? null)
            ?? ($storedData['backupData']['planex_user_profile']['avatar_url'] ?? null)
            ?? '';

        echo json_encode([
            'success'    => true,
            'name'       => $userName,
            'avatar'     => $userAvatar,
            'avatar_url' => $userAvatar,
            'user'       => [
                'id'         => (int) $user['id'],
                'phone'      => $user['phone'],
                'name'       => $userName,
                'avatar'     => $userAvatar,
                'avatar_url' => $userAvatar
            ],
            'backupData' => $storedData['backupData'] ?? null,
            'study_logs' => $storedData['study_logs'] ?? [],
            'rooms'      => $storedData['rooms'] ?? []
        ]);
    } else {
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'User not found']);
    }
}

/**
 * Save User Data
 * POST { "action": "save", "phone": "09xxxxxxxxx", "data": { ... } }
 * → Updates the user's data field.
 */
function handleSave(PDO $pdo, array $input): void
{
    $phone = trim($input['phone'] ?? '');
    // Support both explicit 'data' field and full payload (backupData, study_logs, rooms, etc.)
    $data  = $input['data'] ?? null;
    if ($data === null) {
        // If no explicit 'data' field, wrap the entire payload as data
        $payload = $input;
        unset($payload['action'], $payload['phone']);
        if (!empty($payload)) {
            $data = $payload;
        }
    }

    if (empty($phone)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Phone number is required']);
        return;
    }

    // Check if user exists
    $stmt = $pdo->prepare("SELECT id FROM users WHERE phone = :phone LIMIT 1");
    $stmt->execute([':phone' => $phone]);
    $user = $stmt->fetch();

    if (!$user) {
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'User not found. Please login first.']);
        return;
    }

    // ── DEEP MERGE with existing stored data (replaces Last-Write-Wins overwrite) ──
    $stmt2 = $pdo->prepare("SELECT data FROM users WHERE phone = :phone LIMIT 1");
    $stmt2->execute([':phone' => $phone]);
    $row = $stmt2->fetch();
    $existingData = $row ? (json_decode($row['data'], true) ?: []) : [];
    if (!is_array($existingData)) $existingData = [];

    // Normalize the incoming document: explicit 'data' bag plus any top-level
    // collections/identity fields the client sent alongside it.
    $incomingDoc = is_array($data) ? $data : [];
    foreach (['backupData', 'study_logs', 'rooms', 'appState', '_version', 'updatedAt'] as $k) {
        if (array_key_exists($k, $input) && !array_key_exists($k, $incomingDoc)) {
            $incomingDoc[$k] = $input[$k];
        }
    }
    if (isset($incomingDoc['appState']) && !isset($incomingDoc['backupData'])) {
        $incomingDoc['backupData'] = $incomingDoc['appState'];
    }

    // mergeUserDocument() handles: list union+dedupe by unique id/timestamp,
    // recursive object merge, empty-array protection, stale-write rejection,
    // and bumps _version + updatedAt for future concurrency checks.
    $mergedData = mergeUserDocument($existingData, $incomingDoc);

    // IDENTITY GUARD: persist the top-level name/avatar from the incoming payload
    // (and mirror them inside backupData) so handleGet always returns them.
    // Placeholders ('کاربر پلنکس' & co.) never win over a real stored identity.
    $incName   = trim((string) ($input['name'] ?? ($data['name'] ?? '')));
    $incAvatar = trim((string) ($input['avatar_url'] ?? $input['avatar'] ?? (($data['avatar_url'] ?? '') ?: ($data['avatar'] ?? ''))));
    $placeholderNames = ['کاربر پلنکس', 'دانش‌آموز پرتلاش', 'داوطلب پرتلاش', ''];
    if ($incName !== '' && !in_array($incName, $placeholderNames, true)) {
        $mergedData['name'] = $incName;
    }
    if ($incAvatar !== '') {
        $mergedData['avatar']     = $incAvatar;
        $mergedData['avatar_url'] = $incAvatar;
    }
    if (is_array($mergedData['backupData'] ?? null)) {
        if ($incName !== '' && !in_array($incName, $placeholderNames, true)) {
            $mergedData['backupData']['planex_user_nickname'] = $incName;
            if (!is_array($mergedData['backupData']['planex_user_profile'] ?? null)) {
                $mergedData['backupData']['planex_user_profile'] = [];
            }
            $mergedData['backupData']['planex_user_profile']['name']     = $incName;
            $mergedData['backupData']['planex_user_profile']['nickname'] = $incName;
        }
        if ($incAvatar !== '') {
            $mergedData['backupData']['planex_user_avatar'] = $incAvatar;
            if (!is_array($mergedData['backupData']['planex_user_profile'] ?? null)) {
                $mergedData['backupData']['planex_user_profile'] = [];
            }
            $mergedData['backupData']['planex_user_profile']['avatar']     = $incAvatar;
            $mergedData['backupData']['planex_user_profile']['avatar_url'] = $incAvatar;
        }
    }

    // Update data
    $stmt = $pdo->prepare("UPDATE users SET data = :data, updated_at = NOW() WHERE phone = :phone");
    $stmt->execute([
        ':data'  => json_encode($mergedData, JSON_UNESCAPED_UNICODE),
        ':phone' => $phone
    ]);

    // ── Return the FULLY MERGED server reality to the client ──
    // The response mirrors handleGet's shape so personalSyncService can pull /
    // hydrate localStorage with exactly what now lives in the database row.
    $finalName = $mergedData['name']
        ?? ($mergedData['backupData']['planex_user_nickname'] ?? null)
        ?? (is_array($mergedData['backupData']['planex_user_profile'] ?? null)
              ? ($mergedData['backupData']['planex_user_profile']['name']
                 ?? $mergedData['backupData']['planex_user_profile']['nickname'] ?? null)
              : null)
        ?? 'کاربر پلنکس';

    $finalAvatar = $mergedData['avatar_url']
        ?? ($mergedData['avatar'] ?? null)
        ?? (is_array($mergedData['backupData'] ?? null)
              ? ($mergedData['backupData']['planex_user_avatar'] ?? null)
              : null)
        ?? '';

    echo json_encode([
        'success'    => true,
        'message'    => 'Data saved successfully',
        'merged'     => true,
        '_version'   => $mergedData['_version'] ?? null,
        'updatedAt'  => $mergedData['updatedAt'] ?? null,
        'name'       => $finalName,
        'avatar'     => $finalAvatar,
        'avatar_url' => $finalAvatar,
        'user'       => [
            'phone'      => $phone,
            'name'       => $finalName,
            'avatar'     => $finalAvatar,
            'avatar_url' => $finalAvatar
        ],
        'backupData' => is_array($mergedData) ? ($mergedData['backupData'] ?? $mergedData) : $mergedData,
        'study_logs' => is_array($mergedData) ? ($mergedData['study_logs'] ?? []) : [],
        'rooms'      => is_array($mergedData) ? ($mergedData['rooms'] ?? []) : []
    ]);
}
