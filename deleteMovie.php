<?php
	session_start();
	$err = "";
	$mysql = mysqli_connect("localhost:8889","root","root","MOVIE_STORE");
	if (mysqli_connect_errno()){
		$err .= "Failed to connect to MySQL: ".mysqli_connect_error().", ";
	}

	$movie_name = mysqli_real_escape_string($mysql,$_POST['movie_name']);
	$query = "UPDATE MOVIE SET isDeleted = 1 WHERE movie_name = '".$movie_name."';";
	if (!mysqli_query($mysql,$query)) {
		$err .= "Error: ".$query.mysqli_error($mysql).", ";
	}

	echo $err;

?>