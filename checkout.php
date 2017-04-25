<?php
	session_start();
	$err = "";

	$mysql = mysqli_connect("localhost:8889","root","root","MOVIE_STORE");
	if (mysqli_connect_errno()){
		$err .= "Failed to connect to MySQL: ".mysqli_connect_error().", ";
	}

	$movie_id = $_POST['movie_id'];
	$user_id = $_SESSION['id'];


	$query = "UPDATE SHOPPING_CART SET check_out = 1, date = curdate() WHERE movie_id = $movie_id AND user_id = $user_id;";
	if (!mysqli_query($mysql,$query)) {
		$err .= "Error: ".$query.mysqli_error($conn).", ";
	}
	echo $err;


?>