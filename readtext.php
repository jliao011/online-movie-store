<?php
$id =1;
$path='inventory/synopsis/'.$id.'.txt';
$synopsis=file_get_contents($path);
echo $synopsis;
?>