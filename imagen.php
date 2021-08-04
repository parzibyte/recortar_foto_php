<?php
$imagenCodificada = $_POST["imagen"];
$imagenCodificadaLimpia = str_replace("data:image/png;base64,", "", $imagenCodificada);
$imagenDecodificada = base64_decode($imagenCodificadaLimpia);
$nombreImagenGuardada = "imagen_" . uniqid() . ".png";
file_put_contents($nombreImagenGuardada, $imagenDecodificada);
echo json_encode($nombreImagenGuardada);
