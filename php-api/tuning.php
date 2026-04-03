<?php
// Reporte de errores para diagnóstico
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') exit;

// Conexión
$conn = new mysqli("qaqb246.glvperformance.com", "qaqb246", "@@07O5pmuxxx", "qaqb246");

if ($conn->connect_error) {
    die(json_encode(["error" => "Conexión fallida: " . $conn->connect_error]));
}

// --- LÓGICA DE LOGIN --- (Ya la tenías, se mantiene igual)
if (isset($_GET['action']) && $_GET['action'] == 'login') {
    $input = file_get_contents('php://input');
    $d = json_decode($input, true);
    $e = trim($d['email'] ?? '');
    $p = trim($d['password'] ?? '');
    
    $s = $conn->prepare("SELECT id, email, password, name, role FROM users WHERE email = ?");
    $s->bind_param("s", $e);
    $s->execute();
    $u = $s->get_result()->fetch_assoc();
    
    if ($u && $p === $u['password']) {
        $cleanRole = strtolower(trim($u['role']));
        $userData = [
            "id" => (string)$u['id'],
            "email" => $u['email'],
            "name" => $u['name'],
            "role" => $cleanRole,
            "app_metadata" => ["role" => $cleanRole],
            "user_metadata" => ["role" => $cleanRole, "full_name" => $u['name']]
        ];
        echo json_encode(["user" => $userData]);
    } else {
        http_response_code(401);
        echo json_encode(["error" => "fail", "debug" => "Email o password incorrectos"]);
    }
    exit;
}

// --- NUEVA LÓGICA: ACTUALIZAR CONTRASEÑA ---
if (isset($_GET['action']) && $_GET['action'] == 'update_password') {
    $input = file_get_contents('php://input');
    $d = json_decode($input, true);
    
    $newPass = $d['password'] ?? '';
    $userId = $d['user_id'] ?? '';
    
    if ($newPass && $userId) {
        $s = $conn->prepare("UPDATE users SET password = ? WHERE id = ?");
        $s->bind_param("ss", $newPass, $userId);
        if ($s->execute()) {
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["success" => false, "error" => "Error al actualizar"]);
        }
    } else {
        echo json_encode(["success" => false, "error" => "Datos incompletos"]);
    }
    exit;
}

// --- LECTURA DE TABLAS --- (Se mantiene igual)
if (isset($_GET['table'])) {
    $t = $_GET['table'];
    $allowed = ['events', 'user_roles', 'reviews', 'users'];
    if (!in_array($t, $allowed)) {
        echo json_encode([]);
        exit;
    }

    $res = $conn->query("SELECT * FROM $t");
    $rows = [];
    if ($res) {
        while($r = $res->fetch_assoc()) { 
            if (isset($r['password'])) unset($r['password']);
            $rows[] = $r; 
        }
    }
    echo json_encode($rows);
    exit;
}

echo json_encode(["status" => "online", "message" => "Esperando tabla o accion"]);
$conn->close();
?>
