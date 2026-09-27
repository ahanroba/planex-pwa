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
            $mergedData = array_merge($storedData, $incomingData);
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

        // 2. Force Save & Return (Backend): Filter out stale placeholders ('x', 'دانش‌آموز پرتلاش') if a valid custom name exists
        $userName = null;
        $nameCandidates = [
            $storedData['name'] ?? null,
            $storedData['nickname'] ?? null,
            $storedData['backupData']['planex_user_nickname'] ?? null,
            $storedData['backupData']['planex_user_profile']['name'] ?? null,
            $storedData['backupData']['planex_user_profile']['nickname'] ?? null,
        ];
        foreach ($nameCandidates as $cand) {
            if (!empty($cand) && $cand !== 'x' && $cand !== 'دانش آموز پرتلاش' && $cand !== 'دانش‌آموز پرتلاش') {
                $userName = $cand;
                break;
            }
        }
        if (!$userName) {
            foreach ($nameCandidates as $cand) {
                if (!empty($cand)) {
                    $userName = $cand;
                    break;
                }
            }
        }
        if (!$userName) {
            $userName = 'کاربر پلنکس';
        }

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

    // 2. Force Save & Return: Explicitly extract name and avatar from incoming JSON
    $incomingName = $input['name'] 
        ?? ($input['nickname'] ?? null)
        ?? ($input['planex_user_nickname'] ?? null)
        ?? ($input['data']['name'] ?? null) 
        ?? ($input['data']['nickname'] ?? null)
        ?? ($input['backupData']['planex_user_nickname'] ?? null) 
        ?? ($input['data']['backupData']['planex_user_nickname'] ?? null);

    $incomingAvatar = $input['avatar'] 
        ?? ($input['avatar_url'] ?? null)
        ?? ($input['photo_url'] ?? null)
        ?? ($input['planex_user_avatar'] ?? null)
        ?? ($input['data']['avatar'] ?? null)
        ?? ($input['data']['avatar_url'] ?? null)
        ?? ($input['backupData']['planex_user_avatar'] ?? null);

    // Merge incoming data with existing stored data (don't overwrite the whole record)
    $stmt2 = $pdo->prepare("SELECT data FROM users WHERE phone = :phone LIMIT 1");
    $stmt2->execute([':phone' => $phone]);
    $row = $stmt2->fetch();
    $existingData = $row ? (json_decode($row['data'], true) ?: []) : [];
    $mergedData = is_array($data) ? array_merge($existingData, $data) : $data;
    if (!is_array($mergedData)) {
        $mergedData = [];
    }

    // Forcefully update $mergedData['name'] and $mergedData['backupData']['planex_user_nickname']
    if (!empty($incomingName)) {
        $mergedData['name'] = $incomingName;
        $mergedData['nickname'] = $incomingName;
        if (!isset($mergedData['backupData']) || !is_array($mergedData['backupData'])) {
            $mergedData['backupData'] = [];
        }
        $mergedData['backupData']['planex_user_nickname'] = $incomingName;
        if (isset($mergedData['backupData']['planex_user_profile']) && is_array($mergedData['backupData']['planex_user_profile'])) {
            $mergedData['backupData']['planex_user_profile']['name'] = $incomingName;
            $mergedData['backupData']['planex_user_profile']['nickname'] = $incomingName;
        }
    }

    if (!empty($incomingAvatar)) {
        $mergedData['avatar'] = $incomingAvatar;
        $mergedData['avatar_url'] = $incomingAvatar;
        if (!isset($mergedData['backupData']) || !is_array($mergedData['backupData'])) {
            $mergedData['backupData'] = [];
        }
        $mergedData['backupData']['planex_user_avatar'] = $incomingAvatar;
        if (isset($mergedData['backupData']['planex_user_profile']) && is_array($mergedData['backupData']['planex_user_profile'])) {
            $mergedData['backupData']['planex_user_profile']['avatar'] = $incomingAvatar;
            $mergedData['backupData']['planex_user_profile']['avatar_url'] = $incomingAvatar;
        }
    }

    // Save to DB
    $stmt = $pdo->prepare("UPDATE users SET data = :data, updated_at = NOW() WHERE phone = :phone");
    $stmt->execute([
        ':data'  => json_encode($mergedData, JSON_UNESCAPED_UNICODE),
        ':phone' => $phone
    ]);

    $savedName = $mergedData['name'] ?? ($mergedData['backupData']['planex_user_nickname'] ?? null) ?? 'کاربر پلنکس';
    $savedAvatar = $mergedData['avatar_url'] ?? ($mergedData['avatar'] ?? null) ?? ($mergedData['backupData']['planex_user_avatar'] ?? null) ?? '';

    // Explicitly return name and avatar in JSON response
    echo json_encode([
        'success'    => true,
        'message'    => 'Data saved successfully',
        'name'       => $savedName,
        'avatar'     => $savedAvatar,
        'avatar_url' => $savedAvatar,
        'user'       => [
            'id'         => (int) $user['id'],
            'phone'      => $phone,
            'name'       => $savedName,
            'avatar'     => $savedAvatar,
            'avatar_url' => $savedAvatar
        ],
        'backupData' => $mergedData['backupData'] ?? $mergedData,
        'study_logs' => $mergedData['study_logs'] ?? [],
        'rooms'      => $mergedData['rooms'] ?? []
    ]);
}
