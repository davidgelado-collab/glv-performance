<?php
// 1. Cabeceras para que React pueda comunicarse con el PHP
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Si es una petición OPTIONS (pre-vuelo), terminamos aquí
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

// 2. CONFIGURACIÓN DE TU BASE DE DATOS EN ARSYS
// Cambia esto con los datos reales de tu panel de Arsys
$host = "localhost"; 
$user = "USUARIO_DE_TU_BASE_DE_DATOS"; 
$pass = "TU_CONTRASEÑA"; 
$db   = "NOMBRE_DE_TU_BASE_DE_DATOS";

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
                    "user_metadata" => ["full_name" => $user['name']],
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

    // --- LÓGICA DE REGISTRO (Para nuevos usuarios) ---
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

    // --- LÓGICA DE LECTURA DE TABLAS (Eventos, etc.) ---
    if (isset($_GET['table'])) {
        $table = $_GET['table'];
        // Seguridad básica para evitar que lean tablas del sistema
        $allowed = ['events', 'user_roles', 'reviews']; 
        if (!in_array($table, $allowed)) {
            throw new Exception("Tabla no permitida");
        }

        $result = $conn->query("SELECT * FROM $table");
        $rows = [];
        while($row = $result->fetch_assoc()) {
            // Convertimos booleanos de MySQL (0/1) a verdaderos booleanos para JS
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
