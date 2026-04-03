// Dentro de tuning.php, en la parte de LOGIN:
if (isset($_GET['action']) && $_GET['action'] == 'login') {
    $data = json_decode(file_get_contents('php://input'), true);
    $email = $data['email'];
    $pass  = $data['password'];

    $stmt = $conn->prepare("SELECT id, email, password, name, role FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    // Comprobamos si el usuario existe y la contraseña coincide
    if ($user && $pass === $user['password']) {
        // Quitamos la contraseña del array antes de enviarlo por seguridad
        unset($user['password']); 
        
        // Devolvemos el usuario COMPLETO (incluyendo el role: 'admin', 'socio' o 'user')
        echo json_encode([
            "user" => [
                "id" => $user['id'],
                "email" => $user['email'],
                "user_metadata" => ["full_name" => $user['name']],
                "role" => $user['role'] // <--- ¡ESTO ES LO IMPORTANTE!
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
