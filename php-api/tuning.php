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

// Obtenemos el método y los datos de entrada
$method = $_SERVER['REQUEST_METHOD'];
$input = file_get_contents('php://input');
$d = json_decode($input, true);
$table = $_GET['table'] ?? '';
$action = $_GET['action'] ?? '';

// --- 1. LÓGICA DE LOGIN ---
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
        echo json_encode(["error" => "Credenciales incorrectas"]);
    }
    exit;
}

// --- 2. CREAR EVENTOS (POST) ---
if ($method === 'POST' && $table === 'events') {
    // Limpiamos las fechas para MySQL (Quitamos la T y la Z de ISO String)
    $start = isset($d['start_datetime']) ? str_replace(['T', 'Z'], [' ', ''], substr($d['start_datetime'], 0, 19)) : date('Y-m-d H:i:s');
    $end = isset($d['end_datetime']) ? str_replace(['T', 'Z'], [' ', ''], substr($d['end_datetime'], 0, 19)) : $start;
    
    $title = $d['title'] ?? 'Sin título';
    $loc   = $d['location'] ?? '';
    $desc  = $d['description'] ?? '';
    $img   = $d['image_url'] ?? '';
    $priv  = (isset($d['is_private']) && $d['is_private'] == true) ? 1 : 0;

    $sql = "INSERT INTO events (title, description, start_datetime, end_datetime, location, image_url, is_private) VALUES (?, ?, ?, ?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        die(json_encode(["error" => "Error SQL: " . $conn->error]));
    }

    $stmt->bind_param("ssssssi", $title, $desc, $start, $end, $loc, $img, $priv);
    
    if ($stmt->execute()) {
        echo json_encode(["success" => true, "id" => $conn->insert_id]);
    } else {
        echo json_encode(["error" => "Error al guardar: " . $stmt->error]);
    }
    exit;
}

// --- 3. LECTURA DE TABLAS (GET) ---
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
            if (isset($r['password'])) unset($r['password']);
            $rows[] = $r; 
        }
    }
    echo json_encode($rows);
    exit;
}

echo json_encode(["status" => "online", "message" => "Listo para recibir datos"]);
$conn->close();
?>
