<?php
// 1. Cabeceras corregidas para evitar bloqueos (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

// 2. CONFIGURACIÓN (Verifica que estos datos sean correctos en tu panel de Arsys)
$host = "qaqb246.glvperformance.com"; 
$user = "qaqb246"; 
$pass = "@@07O5pmuxxx"; 
$db   = "qaqb246";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(["error" => "Conexión fallida: " . $conn->connect_error]));
}

try {
    // --- LÓGICA DE LOGIN ---
    if (isset($_GET['action']) && $_GET['action'] == 'login') {
        $data = json_decode(file_get_contents('php://input'), true);
        $email = $data['email'] ?? '';
        $pass  = $data['password'] ?? '';

        $stmt = $conn->prepare("SELECT id, email, password, name, role FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $user = $stmt->get_result()->fetch_assoc();

        if ($user && $pass === $user['password']) {
            unset($user['password']); 
            echo json_encode([
                "user" => [
                    "id" => (string)$user['id'],
                    "email" => $user['email'],
                    "name" => $user['name'], // Añadido para el perfil
                    "user_metadata" => ["full_name" => $user['name'], "role" => $user['role']],
                    "app_metadata" => ["role" => $user['role']],
                    "role" => $user['role']
                ],
                "session" => ["access_token" => "token_falso_arsys", "user" => $user]
            ]);
            exit;
        } else {
            http_response_code(401);
            echo json_encode(["error" => "Email o contraseña incorrectos"]);
            exit;
        }
    }

    // --- LÓGICA DE ACTUALIZAR CONTRASEÑA (¡NUEVO!) ---
    if (isset($_GET['action']) && $_GET['action'] == 'update_password') {
        $data = json_decode(file_get_contents('php://input'), true);
        $new_pass = $data['password'] ?? '';
        $user_id = $data['user_id'] ?? '';

        if ($new_pass && $user_id) {
            $stmt = $conn->prepare("UPDATE users SET password = ? WHERE id = ?");
            $stmt->bind_param("si", $new_pass, $user_id);
            if ($stmt->execute()) {
                echo json_encode(["success" => true, "message" => "Contraseña cambiada"]);
            } else {
                http_response_code(500);
                echo json_encode(["error" => "Error al guardar"]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["error" => "Faltan datos"]);
        }
        exit;
    }

    // --- LÓGICA DE REGISTRO ---
    if (isset($_GET['action']) && $_GET['action'] == 'register') {
        $data = json_decode(file_get_contents('php://input'), true);
        $email = $data['email'] ?? '';
        $pass  = $data['password'] ?? '';
        $name  = $data['name'] ?? '';

        $stmt = $conn->prepare("INSERT INTO users (email, password, name, role) VALUES (?, ?, ?, 'user')");
        $stmt->bind_param("sss", $email, $pass, $name);
        
        if ($stmt->execute()) {
            echo json_encode(["success" => true, "id" => $conn->insert_id]);
        } else {
            http_response_code(400);
            echo json_encode(["error" => "El email ya existe"]);
        }
        exit;
    }

    // --- LÓGICA DE LECTURA DE TABLAS ---
    if (isset($_GET['table'])) {
        $table = $_GET['table'];
        $allowed = ['events', 'user_roles', 'reviews', 'users']; // Añadido 'users' para que el admin pueda ver la lista
        if (!in_array($table, $allowed)) {
            throw new Exception("Tabla no permitida");
        }

        $result = $conn->query("SELECT * FROM $table");
        $rows = [];
        while($row = $result->fetch_assoc()) {
            if (isset($row['password'])) unset($row['password']); // No enviar contraseñas en listados
            foreach($row as $key => $val) {
                if ($val === "1" || $val === "0") {
                    if ($key == 'is_private' || $key == 'approved') $row[$key] = (bool)$val;
                }
            }
            $rows[] = $row;
        }
        echo json_encode($rows);
        exit;
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}

$conn->close();
?>
