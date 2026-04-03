<?php
// 1. Configuración de errores y cabeceras
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PATCH, PUT, OPTIONS");
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
$id = $_GET['id'] ?? '';

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

// --- MÉTODO PATCH / PUT: ACTUALIZAR DATOS (EDITAR USUARIO COMPLETO) ---
if (($method === 'PATCH' || $method === 'PUT') && $table === 'users' && $id !== '') {
    $name  = $d['name'] ?? '';
    $email = $d['email'] ?? '';
    $role  = strtolower(trim($d['role'] ?? 'user'));
    $pass  = $d['password'] ?? null;

    if (!empty($pass)) {
        // Si el admin escribió una contraseña, la actualizamos
        $stmt = $conn->prepare("UPDATE users SET name = ?, email = ?, role = ?, password = ? WHERE id = ?");
        $stmt->bind_param("sssss", $name, $email, $role, $pass, $id);
    } else {
        // Si la contraseña viene vacía, actualizamos el resto sin tocar la clave actual
        $stmt = $conn->prepare("UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?");
        $stmt->bind_param("ssss", $name, $email, $role, $id);
    }
    
    if ($stmt->execute()) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["error" => $stmt->error]);
    }
    exit;
}

// --- MÉTODO POST: INSERTAR DATOS ---
if ($method === 'POST' && $table !== '') {
    if ($table === 'events') {
        $start = isset($d['start_datetime']) ? str_replace(['T', 'Z'], [' ', ''], substr($d['start_datetime'], 0, 19)) : date('Y-m-d H:i:s');
        $end = isset($d['end_datetime']) ? str_replace(['T', 'Z'], [' ', ''], substr($d['end_datetime'], 0, 19)) : $start;
        $title = $d['title'] ?? 'Sin título';
        $loc = $d['location'] ?? '';
        $desc = $d['description'] ?? '';
        $img = $d['image_url'] ?? '';
        $priv = (isset($d['is_private']) && $d['is_private'] == true) ? 1 : 0;

        $stmt = $conn->prepare("INSERT INTO events (title, description, start_datetime, end_datetime, location, image_url, is_private) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssssi", $title, $desc, $start, $end, $loc, $img, $priv);
        if ($stmt->execute()) echo json_encode(["success" => true, "id" => $conn->insert_id]);
        else echo json_encode(["error" => $stmt->error]);
        exit;
    }

    if ($table === 'users') {
        $email = trim($d['email'] ?? '');
        $pass = trim($d['password'] ?? '');
        $name = trim($d['name'] ?? explode('@', $email)[0]);
        $role = strtolower(trim($d['role'] ?? 'user'));
        
        $stmt = $conn->prepare("INSERT INTO users (email, password, name, role) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $email, $pass, $name, $role);
        if ($stmt->execute()) echo json_encode(["success" => true, "id" => $conn->insert_id]);
        else echo json_encode(["error" => $stmt->error]);
        exit;
    }
}

// --- MÉTODO GET: LECTURA ---
if ($method === 'GET' && $table !== '') {
    $allowed = ['events', 'users', 'reviews'];
    if (!in_array($table, $allowed)) die(json_encode([]));

    $res = $conn->query("SELECT * FROM $table");
    $rows = [];
    while($r = $res->fetch_assoc()) {
        if (isset($r['password'])) unset($r['password']);
        $rows[] = $r;
    }
    echo json_encode($rows);
    exit;
}

// --- MÉTODO DELETE: ELIMINAR ---
if ($method === 'DELETE' && $table !== '') {
    if (!$id) die(json_encode(["error" => "ID no proporcionado"]));

    $stmt = $conn->prepare("DELETE FROM $table WHERE id = ?");
    $stmt->bind_param("s", $id);
    if ($stmt->execute()) echo json_encode(["success" => true]);
    else echo json_encode(["error" => $stmt->error]);
    exit;
}

echo json_encode(["status" => "online"]);
$conn->close();
?>
