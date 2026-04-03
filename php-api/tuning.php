<?php
// Configuración de cabeceras para React
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Manejo de peticiones OPTIONS (Preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

// Datos de conexión (Usa los mismos que en glv-performance)
$host = "localhost"; 
$user = "TU_USUARIO_ARSYS";
$pass = "TU_PASSWORD_ARSYS";
$db   = "TU_BASE_DE_DATOS_COMPARTIDA";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(["error" => "Conexión fallida: " . $conn->connect_error]));
}

$method = $_SERVER['REQUEST_METHOD'];
$table = isset($_GET['table']) ? $_GET['table'] : 'items';

// Evitar inyección SQL básica en el nombre de la tabla
$table = preg_replace('/[^a-zA-Z0-9_]/', '', $table);

if ($method === 'GET') {
    $result = $conn->query("SELECT * FROM $table");
    $rows = [];
    if ($result) {
        while($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }
    }
    // Devolvemos el formato exacto que espera la app
    echo json_encode($rows);
}

$conn->close();
?>
