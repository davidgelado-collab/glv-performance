<?php
// Forzar que los errores se vean sí o sí
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Cabeceras básicas
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// TEST 1: Si ves esto en el navegador, el PHP funciona
// echo json_encode(["mensaje" => "PHP funcionando"]); exit;

// DATOS DE CONEXIÓN - ¡Revísalos bien!
$host = "aqb246.glvperformance.com"; 
$user = "qaqb246"; 
$pass = '@@07O5pmuxxx'; 
$db   = "qaqb246";

// Intentar conectar con un bloque try/catch manual
try {
    $conn = new mysqli($host, $user, $pass, $db);

    if ($conn->connect_error) {
        throw new Exception("Fallo de conexión: " . $conn->connect_error);
    }

    $table = isset($_GET['table']) ? $_GET['table'] : 'items';
    $table = preg_replace('/[^a-zA-Z0-9_]/', '', $table);

    $result = $conn->query("SELECT * FROM $table LIMIT 10");

    if (!$result) {
        throw new Exception("Error en la consulta: " . $conn->error);
    }

    $rows = [];
    while($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }

    echo json_encode($rows);

} catch (Exception $e) {
    // Si algo falla, esto evita el Error 500 y te dice qué es
    http_response_code(200); // Engañamos al servidor para que no de Error 500
    echo json_encode([
        "error" => true,
        "mensaje" => $e->getMessage()
    ]);
}
?>
