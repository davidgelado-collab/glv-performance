// --- LÓGICA DE LOGIN REFORZADA ---
if (isset($_GET['action']) && $_GET['action'] == 'login') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Limpiamos posibles espacios en blanco
    $email = isset($data['email']) ? trim($data['email']) : '';
    $pass  = isset($data['password']) ? trim($data['password']) : '';

    $stmt = $conn->prepare("SELECT id, email, password, name, role FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    // Comprobación simple de texto plano (Asegúrate que en la DB esté igual)
    if ($user && $pass === $user['password']) {
        // Quitamos la pass por seguridad
        unset($user['password']); 
        
        // Estructura limpia para que el client.ts no se líe
        echo json_encode([
            "user" => [
                "id" => (string)$user['id'],
                "email" => $user['email'],
                "name" => $user['name'],
                "role" => $user['role']
            ]
        ]);
        exit;
    } else {
        http_response_code(401);
        echo json_encode(["error" => "Credenciales incorrectas"]);
        exit;
    }
}

// --- LÓGICA DE ACTUALIZAR CONTRASEÑA ---
if (isset($_GET['action']) && $_GET['action'] == 'update_password') {
    $data = json_decode(file_get_contents('php://input'), true);
    $new_pass = $data['password'] ?? '';
    $user_id = $data['user_id'] ?? '';

    if ($new_pass && $user_id) {
        $stmt = $conn->prepare("UPDATE users SET password = ? WHERE id = ?");
        $stmt->bind_param("si", $new_pass, $user_id);
        if ($stmt->execute()) {
            echo json_encode(["success" => true]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Error en DB"]);
        }
    }
    exit;
}
