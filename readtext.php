<?php
$id = $_POST['movie_id'];
$path='inventory/synopsis/'.$id.'.txt';
$synopsis=file_get_contents($path);
echo $synopsis;
?>