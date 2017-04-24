<?php
	session_start();
	$err = "";
	$mysql = mysqli_connect("localhost:8889","root","root","MOVIE_STORE");
	if (mysqli_connect_errno()){
		$err .= "Failed to connect to MySQL: ".mysqli_connect_error()."<br/>";
	}

	$user_id = $_SESSION['id'];
	$movie_id = $_POST['movie_id'];

	if($user_id == ""){
		$err = "Please login.<br/>";
	}else{
		$query = "SELECT * FROM SHOPPING_CART WHERE user_id = '".$user_id."' AND movie_id = '".$movie_id."';";
		$result = mysqli_query($mysql,$query);
		if(mysqli_num_rows($result) != 0){
			$err .= "This item is in your shopping cart or you have already bought it before.";
		}else{
			$query = "INSERT INTO SHOPPING_CART VALUES ($user_id,$movie_id,0,curdate());";
			if (!mysqli_query($mysql,$query)) {
				$err .= $query.mysqli_error($mysql)."<br/>";
			}
		}
	}
	echo $err;






?>