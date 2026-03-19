<?php
// ============================================
// CONFIGURACIÓN DE BASE DE DATOS
// Sube esta carpeta "php-api" a tu servidor
// en: https://glvperformance.com/api/
// ============================================

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Responder a preflight CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ⚠️ CAMBIA ESTOS VALORES por los de tu servidor
define('DB_HOST', 'qaqb246.glvperformance.com');
define('DB_NAME', 'qaqb246');
define('DB_USER', 'qaqb246');
define('DB_PASS', '@@07O5pmuxxx');

// Contraseña del panel admin (cámbiala)
define('ADMIN_USER', 'admin@glvperformance.com');
define('ADMIN_PASS', '@07O5pmux');

// Token secreto para autenticar admin (genera uno aleatorio)
define('JWT_SECRET', 'k9$mP2!vR*wQz7&N_uX8@bL5#jY1^tG4_fS9*pA6%dV3#hK8!mN0_qW4');

function getDB(): PDO {
    try {
        $pdo = new PDO(
            'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4',
            DB_USER,
            DB_PASS,
            [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]
        );
        return $pdo;
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Error de conexión a la base de datos']);
        exit;
    }
}

function jsonResponse($data, int $status = 200): void {
    http_response_code($status);
    echo json_encode($data);
    exit;
}

function getJsonInput(): array {
    $input = json_decode(file_get_contents('php://input'), true);
    return is_array($input) ? $input : [];
}

function requireAuth(): void {
    $headers = getallheaders();
    $auth = $headers['Authorization'] ?? '';
    
    if (!str_starts_with($auth, 'Bearer ')) {
        jsonResponse(['error' => 'No autorizado'], 401);
    }
    
    $token = substr($auth, 7);
    $expected = hash_hmac('sha256', ADMIN_USER, JWT_SECRET);
    
    if (!hash_equals($expected, $token)) {
        jsonResponse(['error' => 'Token inválido'], 401);
    }
}
