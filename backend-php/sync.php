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
} elseif ($method === 'POST') {
    $action = $input['action'] ?? '';
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
        echo json_encode([
            'success' => true,
            'message' => 'Login successful',
            'user'    => $user
        ]);
    } else {
        // Register new user
        $stmt = $pdo->prepare("INSERT INTO users (phone, data, created_at, updated_at) VALUES (:phone, :data, NOW(), NOW())");
        $stmt->execute([
            ':phone' => $phone,
            ':data'  => json_encode(null)
        ]);

        $newId = $pdo->lastInsertId();

        echo json_encode([
            'success' => true,
            'message' => 'User registered successfully',
            'user'    => [
                'id'    => (int) $newId,
                'phone' => $phone,
                'data'  => null
            ]
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
        $user['data'] = json_decode($user['data'], true);

        echo json_encode([
            'success' => true,
            'user'    => $user
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
    $data  = $input['data'] ?? null;

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

    // Update data
    $stmt = $pdo->prepare("UPDATE users SET data = :data, updated_at = NOW() WHERE phone = :phone");
    $stmt->execute([
        ':data'  => json_encode($data, JSON_UNESCAPED_UNICODE),
        ':phone' => $phone
    ]);

    echo json_encode([
        'success' => true,
        'message' => 'Data saved successfully'
    ]);
}
