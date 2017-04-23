<?php
$id =1;
$path='inventory/images/'.$id.'.jpg';
$type=pathinfo($path,PATHINFO_EXTENSION);
$data=file_get_contents($path);
$base64='data:image/'.$type.';base64,'.base64_encode($data);
echo '<img src= " '.$base64.'" />';
?>