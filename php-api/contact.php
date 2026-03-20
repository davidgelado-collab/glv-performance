<?php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['error' => 'Método no permitido'], 405);
}

$input = getJsonInput();

$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$vehicle = trim($input['vehicle'] ?? '');
$message = trim($input['message'] ?? '');

// Validación
if ($name === '' || strlen($name) > 100) {
    jsonResponse(['error' => 'Nombre inválido'], 400);
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonResponse(['error' => 'Email inválido'], 400);
}
if (strlen($vehicle) > 200) {
    jsonResponse(['error' => 'Vehículo demasiado largo'], 400);
}
if ($message === '' || strlen($message) > 2000) {
    jsonResponse(['error' => 'Mensaje inválido'], 400);
}

// Construir email
$to = 'info@glvperformance.com';
$subject = "Nueva consulta de $name" . ($vehicle ? " - $vehicle" : "");

$body = "
<html>
<body style='font-family: Arial, sans-serif; color: #333;'>
<h2 style='color: #e53e3e;'>Nueva consulta desde la web</h2>
<table style='border-collapse: collapse; width: 100%;'>
<tr><td style='padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;'>Nombre:</td><td style='padding: 8px; border-bottom: 1px solid #eee;'>" . htmlspecialchars($name) . "</td></tr>
<tr><td style='padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;'>Email:</td><td style='padding: 8px; border-bottom: 1px solid #eee;'>" . htmlspecialchars($email) . "</td></tr>
<tr><td style='padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;'>Vehículo:</td><td style='padding: 8px; border-bottom: 1px solid #eee;'>" . htmlspecialchars($vehicle ?: 'No especificado') . "</td></tr>
<tr><td style='padding: 8px; font-weight: bold;'>Mensaje:</td><td style='padding: 8px;'>" . nl2br(htmlspecialchars($message)) . "</td></tr>
</table>
</body>
</html>
";

$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: GLV Web <noreply@glvperformance.com>',
    'Reply-To: ' . $email,
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    jsonResponse(['error' => 'Error al enviar el email'], 500);
}

jsonResponse(['success' => true], 200);
