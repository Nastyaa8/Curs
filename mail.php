<?php

$conn = mysqli_connect('localhost', 'root', '', 'Anastasia');

$mail = trim($_POST['mail']);


$query = "INSERT INTO `mail` (`id`, `mail`) VALUES (NULL, '$mail');";

$result = mysqli_query($conn, $query);

mysqli_close($conn);