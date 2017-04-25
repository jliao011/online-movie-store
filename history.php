<?php
	session_start();
	$err = "";
	$mysql = mysqli_connect("localhost","root","root","MOVIE_STORE");
	if (mysqli_connect_errno()){
		$err .= "Failed to connect to MySQL: ".mysqli_connect_error()."<br/>";
	}

	$user_id = $_SESSION['id'];
	if($user_id == ""){
		$err .= "Session expires, please re-login.<>";
	}
	else{
		$movie_record = array();

		$query = "SELECT * FROM SHOPPING_CART WHERE user_id = $user_id AND check_out = 1;";
		$result = mysqli_query($mysql,$query);
		while ($row = mysqli_fetch_array($result)){
			$date = $row['date'];

			$query = "SELECT * FROM MOVIE WHERE movie_id = $movie_id;";
			$record = mysqli_query($mysql,$query);
			$movie = mysqli_fetch_array($record);
			$movie_name = $movie['movie_name'];
			$price = $movie['price'];

			$purchase_record = array('name'=>$movie_name,'price'=>$price,'date'=>$date);
			array_push($movie_record, $purchase_record);
		}

	$message = array('err'=>$err,'purchase_list'=>$movie_record);
	echo json_encode($message);
?>