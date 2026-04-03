<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') exit;

$conn = new mysqli("qaqb246.glvperformance.com", "qaqb246", "@@07O5pmuxxx", "qaqb246");

if (isset($_GET['action']) && $_GET['action'] == 'login') {
    $d = json_decode(file_get_contents('php://input'), true);
    $e = $d['email'] ?? '';
    $p = $d['password'] ?? '';
    $s = $conn->prepare("SELECT id, email, password, name, role FROM users WHERE email = ?");
    $s->bind_param("s", $e);
    $s->execute();
    $u = $s->get_result()->fetch_assoc();
    if ($u && $p === $u['password']) {
        unset($u['password']);
        echo json_encode(["user" => $u]);
    } else {
        http_response_code(401);
        echo json_encode(["error" => "fail"]);
    }
    exit;
}

if (isset($_GET['action']) && $_GET['action'] == 'update_password') {
    $d = json_decode(file_get_contents('php://input'), true);
    $s = $conn->prepare("UPDATE users SET password = ? WHERE id = ?");
    $s->bind_param("ss", $d['password'], $d['user_id']);
    echo json_encode(["success" => $s->execute()]);
    exit;
}

if (isset($_GET['table'])) {
    $t = $_GET['table'];
    $res = $conn->query("SELECT * FROM $t");
    $rows = [];
    while($r = $res->fetch_assoc()) { $rows[] = $r; }
    echo json_encode($rows);
    exit;
}
