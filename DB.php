<?php

$conn = mysqli_connect('localhost', 'root', '', 'Anastasia');

$name = trim($_POST['name']);
$phone = trim($_POST['phone']);
$mail = trim($_POST['mail']);
$info = trim($_POST['info']);

$query = "INSERT INTO `test` (`id`, `name`, `phone`, `mail`, `info`) VALUES (NULL, '$name', '$phone', '$mail', '$info');";

$result = mysqli_query($conn, $query);

mysqli_close($conn);