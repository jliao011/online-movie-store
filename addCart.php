<?php
	session_start();
	$err = "";
	$single_movie = array();
	$mysql = mysqli_connect("localhost:8889","root","root","MOVIE_STORE");
	if (mysqli_connect_errno()){
		$err .= "Failed to connect to MySQL: ".mysqli_connect_error()."<br/>";
	}

	echo $_SESSION['id'];







?>