<?php
	session_start();
	$err = "";
	$single_movie = array();
	$mysql = mysqli_connect("localhost:8889","root","root","MOVIE_STORE");
	if (mysqli_connect_errno()){
		$err .= "Failed to connect to MySQL: ".mysqli_connect_error()."<br/>";
	}

	$movie_id = $_POST['movie_id'];
	$query = "SELECT * FROM MOVIE WHERE movie_id = $movie_id;";
	$result = mysqli_query($mysql,$query);
	$movie = mysqli_fetch_array($result);
	$name = $movie['movie_name'];
	$rating = $movie['movie_rating'];
	$year = $movie['year'];
	$price = $movie['price'];
	$cat_array = array();

	$query = "SELECT * FROM CATEGORY WHERE movie_id = $movie_id;";
	$cat_result = mysqli_query($mysql,$query);
	while($cat = mysqli_fetch_array($cat_result)){
		$cat_temp = $cat['category'];
		array_push($cat_array,$cat_temp);
	}
	$single_movie = array('id'=>$id,'name'=>$name,'rating'=>$rating,'year'=>$year,'price'=>$price,'category'=>$cat_array);
	

	echo json_encode($single_movie);



?>