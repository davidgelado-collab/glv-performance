<?php
// 1. Configuración de errores y cabeceras
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') exit;

// 2. Conexión a la base de datos
$conn = new mysqli("qaqb246.glvperformance.com", "qaqb246", "@@07O5pmuxxx", "qaqb246");

if ($conn->connect_error) {
    die(json_encode(["error" => "Conexión fallida: " . $conn->connect_error]));
}

// 3. Captura de datos de entrada
$method = $_SERVER['REQUEST_METHOD'];
$input = file_get_contents('php://input');
$d = json_decode($input, true);
$table = $_GET['table'] ?? '';
$action = $_GET['action'] ?? '';

// --- ACCIÓN: LOGIN ---
if ($action === 'login') {
    $e = trim($d['email'] ?? '');
    $p = trim($d['password'] ?? '');
    
    $s = $conn->prepare("SELECT id, email, password, name, role FROM users WHERE email = ?");
    $s->bind_param("s", $e);
    $s->execute();
    $u = $s->get_result()->fetch_assoc();
    
    if ($u && $p === $u['password']) {
        $cleanRole = strtolower(trim($u['role']));
        echo json_encode([
            "user" => [
                "id" => (string)$u['id'],
                "email" => $u['email'],
                "name" => $u['name'],
                "role" => $cleanRole,
                "app_metadata" => ["role" => $cleanRole, "roles" => [$cleanRole]],
                "user_metadata" => ["role" => $cleanRole, "full_name" => $u['name']]
            ]
        ]);
    } else {
        http_response_code(401);
        echo json_encode(["error" => "Email o contraseña incorrectos"]);
    }
    exit;
}

// --- ACCIÓN: CAMBIAR CONTRASEÑA ---
if ($action === 'update_password') {
    $newPass = $d['password'] ?? '';
    // El ID suele venir en el objeto user de la sesión, asegúrate que el client lo envíe
    $userId = $d['user_id'] ?? ''; 

    if ($newPass && $userId) {
        $s = $conn->prepare("UPDATE users SET password = ? WHERE id = ?");
        $s->bind_param("ss", $newPass, $userId);
        if ($s->execute()) {
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["error" => $conn->error]);
        }
    }
    exit;
}

// --- MÉTODO POST: INSERTAR DATOS (Eventos o Usuarios) ---
if ($method === 'POST' && $table !== '') {
    
    // CASO A: Crear Eventos
    if ($table === 'events') {
        $start = isset($d['start_datetime']) ? str_replace(['T', 'Z'], [' ', ''], substr($d['start_datetime'], 0, 19)) : date('Y-m-d H:i:s');
        $end = isset($d['end_datetime']) ? str_replace(['T', 'Z'], [' ', ''], substr($d['end_datetime'], 0, 19)) : $start;
        
        $title = $d['title'] ?? 'Sin título';
        $loc   = $d['location'] ?? '';
        $desc  = $d['description'] ?? '';
        $img   = $d['image_url'] ?? '';
        $priv  = (isset($d['is_private']) && $d['is_private'] == true) ? 1 : 0;

        $sql = "INSERT INTO events (title, description, start_datetime, end_datetime, location, image_url, is_private) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        if (!$stmt) die(json_encode(["error" => "Error SQL Events: " . $conn->error]));

        $stmt->bind_param("ssssssi", $title, $desc, $start, $end, $loc, $img, $priv);
        
        if ($stmt->execute()) {
            echo json_encode(["success" => true, "id" => $conn->insert_id]);
        } else {
            echo json_encode(["error" => $stmt->error]);
        }
        exit;
    }

    // CASO B: Crear Usuarios (Desde Panel Admin)
    if ($table === 'users') {
        $email = trim($d['email'] ?? '');
        $pass  = trim($d['password'] ?? '');
        $name  = trim($d['name'] ?? explode('@', $email)[0]);
        $role  = strtolower(trim($d['role'] ?? 'user'));

        if (empty($email) || empty($pass)) {
            die(json_encode(["error" => "Email y password obligatorios"]));
        }

        $sql = "INSERT INTO users (email, password, name, role) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        if (!$stmt) die(json_encode(["error" => "Error SQL Users: " . $conn->error]));

        $stmt->bind_param("ssss", $email, $pass, $name, $role);
        
        if ($stmt->execute()) {
            echo json_encode(["success" => true, "id" => $conn->insert_id]);
        } else {
            echo json_encode(["error" => $stmt->error]);
        }
        exit;
    }
}

// --- MÉTODO GET: LECTURA DE TABLAS ---
if ($method === 'GET' && $table !== '') {
    $allowed = ['events', 'user_roles', 'reviews', 'users'];
    if (!in_array($table, $allowed)) {
        echo json_encode([]);
        exit;
    }

    $res = $conn->query("SELECT * FROM $table");
    $rows = [];
    if ($res) {
        while($r = $res->fetch_assoc()) { 
            if (isset($r['password'])) unset($r['password']); // No enviar contraseñas en los listados
            $rows[] = $r; 
        }
    }
    echo json_encode($rows);
    exit;
}

// Respuesta por defecto
echo json_encode(["status" => "online", "message" => "API GLV Performance lista"]);
$conn->close();
?>
