<?php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['error' => 'Método no permitido'], 405);
}

$input = getJsonInput();
$email = trim($input['email'] ?? '');
$password = $input['password'] ?? '';

if ($email !== ADMIN_USER || $password !== ADMIN_PASS) {
    jsonResponse(['error' => 'Credenciales incorrectas'], 401);
}

// Generar token simple basado en HMAC
$token = hash_hmac('sha256', ADMIN_USER, JWT_SECRET);

jsonResponse([
    'token' => $token,
    'email' => ADMIN_USER,
]);
