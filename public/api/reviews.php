<?php
header("Content-Type: application/json; charset=UTF-8");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$configPath = "/home/xfxyrfiz/config.php";

if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode([
        "error" => "config.php não encontrado",
        "checked_path" => $configPath
    ]);
    exit;
}

require_once($configPath);

if (!defined("REACT_GOOGLE_PLACE_ID") || !defined("REACT_GOOGLE_API_KEY")) {
    http_response_code(500);
    echo json_encode(["error" => "Configuração inválida"]);
    exit;
}

$placeId = REACT_GOOGLE_PLACE_ID;
$apiKey  = REACT_GOOGLE_API_KEY;

$url = "https://maps.googleapis.com/maps/api/place/details/json"
    . "?place_id={$placeId}"
    . "&fields=reviews"
    . "&key={$apiKey}";

$response = @file_get_contents($url);

if ($response === FALSE) {
    http_response_code(500);
    echo json_encode(["error" => "Erro ao conectar na API do Google"]);
    exit;
}

$data = json_decode($response, true);

if (isset($data["error_message"])) {
    http_response_code(500);
    echo json_encode([
        "error" => "Google API error",
        "details" => $data["error_message"]
    ]);
    exit;
}

echo $response;
