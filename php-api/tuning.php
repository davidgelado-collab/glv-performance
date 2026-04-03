<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') exit;

// Configuración de conexión (qaqb246)
$conn = new mysqli("qaqb246.glvperformance.com", "qaqb246", "@@07O5pmuxxx", "qaqb246");

if ($conn->connect_error) {
    die(json_encode(["error" => "Conexión fallida"]));
}

// --- LÓGICA DE LOGIN ---
if (isset($_GET['action']) && $_GET['action'] == 'login') {
    $d = json_decode(file_get_contents('php://input'), true);
    $e = trim($d['email'] ?? '');
    $p = trim($d['password'] ?? '');
    
    $s = $conn->prepare("SELECT id, email, password, name, role FROM users WHERE email = ?");
    $s->bind_param("s", $e);
    $s->execute();
    $u = $s->get_result()->fetch_assoc();
    
    if ($u && $p === $u['password']) {
        unset($u['password']);
        
        // LIMPIEZA DE ROL: Aseguramos minúsculas para que Lovable active los menús
        $cleanRole = strtolower(trim($u['role']));
        
        // Estructura enriquecida para que el Frontend no tenga que adivinar
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
        echo json_encode(["error" => "fail"]);
    }
    exit;
}

// --- LÓGICA DE ACTUALIZAR CONTRASEÑA ---
if (isset($_GET['action']) && $_GET['action'] == 'update_password') {
    $d = json_decode(file_get_contents('php://input'), true);
    $pass = $d['password'] ?? '';
    $user_id = $d['user_id'] ?? '';
    
    if ($pass && $user_id) {
        $s = $conn->prepare("UPDATE users SET password = ? WHERE id = ?");
        $s->bind_param("ss", $pass, $user_id);
        echo json_encode(["success" => $s->execute()]);
    } else {
        echo json_encode(["success" => false, "error" => "datos insuficientes"]);
    }
    exit;
}

// --- LECTURA DE TABLAS ---
if (isset($_GET['table'])) {
    $t = $_GET['table'];
    // Seguridad básica: permitimos solo tablas conocidas
    $allowed = ['events', 'user_roles', 'reviews', 'users'];
    if (!in_array($t, $allowed)) {
        echo json_encode([]);
        exit;
    }

    $res = $conn->query("SELECT * FROM $t");
    $rows = [];
    while($r = $res->fetch_assoc()) { 
        if (isset($r['password'])) unset($r['password']);
        $rows[] = $r; 
    }
    echo json_encode($rows);
    exit;
}

$conn->close();
?>
