<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, X-Telegram-Init-Data");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$githubToken = 'YOUR_GITHUB_TOKEN_HERE';

$raw = file_get_contents('php://input');
$input = json_decode($raw, true);

if (!$input) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON payload."]);
    exit();
}

$history = $input['history'] ?? [];
$message = $input['message'] ?? '';

$messages = [];
$messages[] = [
    "role" => "system",
    "content" => "You are PlanEx AI, a helpful, friendly, and concise assistant for students. You can answer scientific, educational, medical, programming, general, and time management questions. You can also generate Leitner flashcards when requested. Always respond in Persian (Farsi) unless the user asks otherwise. Use Markdown formatting for your responses."
];

$hasLatest = false;
foreach ($history as $msg) {
    if (isset($msg['role']) && isset($msg['content']) && in_array($msg['role'], ['user', 'assistant', 'system'])) {
        $messages[] = [
            "role" => $msg['role'],
            "content" => $msg['content']
        ];
        if ($msg['role'] === 'user' && $msg['content'] === $message) {
            $hasLatest = true;
        }
    }
}

if (!$hasLatest && $message !== '') {
    $messages[] = [
        "role" => "user",
        "content" => $message
    ];
}

$payload = [
    "model" => "gpt-4o-mini",
    "messages" => $messages,
    "temperature" => 0.7,
    "max_tokens" => 2000
];

$ch = curl_init('https://models.inference.ai.azure.com/chat/completions');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $githubToken
]);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

$response = curl_exec($ch);
$err = curl_error($ch);
$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($err) {
    http_response_code(500);
    echo json_encode(["error" => "cURL Error: " . $err]);
    exit();
}

$data = json_decode($response, true);

if ($statusCode !== 200) {
    http_response_code(500);
    $errorMessage = "External API Error";
    if (isset($data['error']['message'])) {
        $errorMessage = $data['error']['message'];
    } elseif (isset($data['message'])) {
        $errorMessage = $data['message'];
    }
    echo json_encode(["error" => $errorMessage, "details" => $data]);
    exit();
}

$reply = $data['choices'][0]['message']['content'] ?? null;

if (!$reply) {
    http_response_code(500);
    echo json_encode(["error" => "Invalid response format from external API.", "raw" => $data]);
    exit();
}

echo json_encode([
    "reply" => $reply,
    "model" => "gpt-4o-mini (GitHub Models)"
]);
