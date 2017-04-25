<?php
	session_start();
	$err = "";
	$mysql = mysqli_connect("localhost:8889","root","root","MOVIE_STORE");
	if (mysqli_connect_errno()){
		$err .= "Failed to connect to MySQL: ".mysqli_connect_error()."<br/>";
	}

	$user_id = $_SESSION['id'];
	if($user_id == ""){
		$err .= "Session expires, please re-login.";
	}
	else{
		$movies = array();

		$query = "SELECT * FROM SHOPPING_CART WHERE user_id = $user_id AND check_out = 0;";
		$result = mysqli_query($mysql,$query);
		while($tuple = mysqli_fetch_array($result)){
			$movie_id = $tuple['movie_id'];

			$query = "SELECT * FROM MOVIE WHERE movie_id = $movie_id AND isDeleted = 0;";
			$record = mysqli_query($mysql,$query);
			if(mysqli_num_rows($record)!=0){
				$movie = mysqli_fetch_array($record);
				$movie_name = $movie['movie_name'];
				$rating = $movie['movie_rating'];
				$year = $movie['year'];
				$price = $movie['price'];

				$single_movie = array('id'=>$movie_id,'name'=>$movie_name,'rating'=>$rating,'year'=>$year,'price'=>$price);
				array_push($movies, $single_movie);

			}
	

		}
	}


	$message = array('err'=>$err,'list'=>$movies);
	echo json_encode($message);



?>