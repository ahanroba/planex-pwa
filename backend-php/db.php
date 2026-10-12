<?php
// ─── CORS Headers ───
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ─── Timeout Settings to Prevent 524 Hangs ───
ini_set('default_socket_timeout', '5');

// ─── Database Configuration ───
$db_host = 'localhost';  
$db_name = 'planexap_Planexapp'; 
$db_user = 'planexap_dbuser';
$db_pass = ',{X,rM(Oap7&M$]N';
$db_charset = 'utf8mb4';

// ─── PDO Connection ───
try {
    $dsn = "mysql:host={$db_host};dbname={$db_name};charset={$db_charset}";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
        PDO::ATTR_TIMEOUT            => 5,
    ];
    $pdo = new PDO($dsn, $db_user, $db_pass, $options);
} catch (PDOException $e) {
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database connection failed: ' . $e->getMessage()
    ]);
    exit();
}
