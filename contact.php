<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$file = "messages.txt";

$data = "Nom: $name\nEmail: $email\nMessage: $message\n\n";

file_put_contents($file, $data, FILE_APPEND);

header("Location: merci.html");

}

?>