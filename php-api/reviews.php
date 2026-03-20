<?php
require_once __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'];
$db = getDB();

// GET /api/reviews.php — listar reseñas aprobadas (público)
if ($method === 'GET') {
    $all = isset($_GET['all']) && $_GET['all'] === '1';

    if ($all) {
        requireAuth();
        $stmt = $db->query('SELECT * FROM reviews ORDER BY created_at DESC');
    } else {
        // Hemos quitado el LIMIT 6 para que se vean todas las aprobadas, o puedes dejarlo si prefieres
        $stmt = $db->query('SELECT * FROM reviews WHERE approved = 1 ORDER BY created_at DESC');
    }

    jsonResponse($stmt->fetchAll());
}

// POST /api/reviews.php — crear reseña (público)
if ($method === 'POST') {
    $input = getJsonInput();

    $name = trim($input['name'] ?? '');
    $vehicle = trim($input['vehicle'] ?? '');
    $service_type = trim($input['service_type'] ?? ''); // <-- 1. RECOGER CAMPO
    $rating = (int)($input['rating'] ?? 0);
    $message = trim($input['message'] ?? '');

    // Validación
    if ($name === '' || strlen($name) > 100) {
        jsonResponse(['error' => 'Nombre inválido'], 400);
    }
    if (strlen($vehicle) > 100) {
        jsonResponse(['error' => 'Vehículo demasiado largo'], 400);
    }
    if ($service_type === '' || strlen($service_type) > 100) { // <-- 2. VALIDAR CAMPO
        jsonResponse(['error' => 'Tipo de servicio inválido o muy largo'], 400);
    }
    if ($rating < 1 || $rating > 5) {
        jsonResponse(['error' => 'Valoración inválida'], 400);
    }
    if ($message === '' || strlen($message) > 1000) {
        jsonResponse(['error' => 'Mensaje inválido'], 400);
    }

    // 3. INSERTAR EN SQL (Añadida la columna service_type)
    $stmt = $db->prepare(
        'INSERT INTO reviews (name, vehicle, service_type, rating, message, approved) 
         VALUES (:name, :vehicle, :service_type, :rating, :message, 0)'
    );
    $stmt->execute([
        ':name' => $name,
        ':vehicle' => $vehicle ?: null,
        ':service_type' => $service_type,
        ':rating' => $rating,
        ':message' => $message,
    ]);

    jsonResponse(['success' => true], 201);
}

// ... (El resto del archivo PUT y DELETE se queda exactamente igual)
// PUT /api/reviews.php?id=xxx — toggle aprobación (admin)
if ($method === 'PUT') {
    requireAuth();
    $id = $_GET['id'] ?? '';
    if (!$id) jsonResponse(['error' => 'ID requerido'], 400);

    $input = getJsonInput();
    $approved = isset($input['approved']) ? (int)$input['approved'] : null;
    if ($approved === null) jsonResponse(['error' => 'Campo approved requerido'], 400);

    $stmt = $db->prepare('UPDATE reviews SET approved = :approved WHERE id = :id');
    $stmt->execute([':approved' => $approved, ':id' => $id]);

    jsonResponse(['success' => true]);
}

// DELETE /api/reviews.php?id=xxx — eliminar reseña (admin)
if ($method === 'DELETE') {
    requireAuth();
    $id = $_GET['id'] ?? '';
    if (!$id) jsonResponse(['error' => 'ID requerido'], 400);

    $stmt = $db->prepare('DELETE FROM reviews WHERE id = :id');
    $stmt->execute([':id' => $id]);

    jsonResponse(['success' => true]);
}

http_response_code(405);
echo json_encode(['error' => 'Método no permitido']);
