<?php
	session_start();
	$err = "";
	$list = array();
	$mysql = mysqli_connect("localhost:8889","root","root","MOVIE_STORE");
	if (mysqli_connect_errno()){
		$err .= "Failed to connect to MySQL: ".mysqli_connect_error()."<br/>";
	}

	$movie_name = mysqli_real_escape_string($mysql,$_POST['movie_name']);
	$category = $_POST['category'];


	if($movie_name != ""){
		$query = "SELECT * FROM MOVIE WHERE movie_name LIKE '%".$movie_name."%' AND isDeleted = 0;";
		$result = mysqli_query($mysql,$query);
		while($movie = mysqli_fetch_array($result)){
			$id = $movie['movie_id'];
			$name = $movie['movie_name'];
			$rating = $movie['movie_rating'];
			$year = $movie['year'];
			$price = $movie['price'];
			$cat_array = array();

			$query = "SELECT * FROM CATEGORY WHERE movie_id = $id;";
			$cat_result = mysqli_query($mysql,$query);
			while($cat = mysqli_fetch_array($cat_result)){
				$cat_temp = $cat['category'];
				array_push($cat_array,$cat_temp);
			}
			$single_movie = array('id'=>$id,'name'=>$name,'rating'=>$rating,'year'=>$year,'price'=>$price,'category'=>$cat_array);
			array_push($list,$single_movie);
		}
	}else{
		if($category == ""){
			$query = "SELECT * FROM MOVIE WHERE isDeleted = 0;";
			$result = mysqli_query($mysql,$query);
			while($movie = mysqli_fetch_array($result)){
				$id = $movie['movie_id'];
				$name = $movie['movie_name'];
				$rating = $movie['movie_rating'];
				$year = $movie['year'];
				$price = $movie['price'];
				$cat_array = array();

				$query = "SELECT * FROM CATEGORY WHERE movie_id = $id;";
				$cat_result = mysqli_query($mysql,$query);
				while($cat = mysqli_fetch_array($cat_result)){
					$cat_temp = $cat['category'];
					array_push($cat_array,$cat_temp);
				}
				$single_movie = array('id'=>$id,'name'=>$name,'rating'=>$rating,'year'=>$year,'price'=>$price,'category'=>$cat_array);
				array_push($list,$single_movie);
			}
		}else{
			$query = "SELECT * FROM CATEGORY WHERE category = '".$category."';";
			$result = mysqli_query($mysql,$query);

			while($pair = mysqli_fetch_array($result)){
				$id = $pair['movie_id'];
				$query = "SELECT * FROM MOVIE WHERE movie_id = $id AND isDeleted = 0;";

				$tuple = mysqli_query($mysql,$query);
				$movie = mysqli_fetch_array($tuple);
				$name = $movie['movie_name'];
				$rating = $movie['movie_rating'];
				$year = $movie['year'];
				$price = $movie['price'];
				$cat_array = array();

				$query = "SELECT * FROM CATEGORY WHERE movie_id = $id;";
				$cat_result = mysqli_query($mysql,$query);
				while($cat = mysqli_fetch_array($cat_result)){
					$cat_temp = $cat['category'];
					array_push($cat_array,$cat_temp);
				}
				$single_movie = array('id'=>$id,'name'=>$name,'rating'=>$rating,'year'=>$year,'price'=>$price,'category'=>$cat_array);
				array_push($list,$single_movie);
			}
		}
	}


	function fetch_name($result){
		$list = array();
		while($movie = mysqli_fetch_array($result)){
			$id = $movie['movie_id'];
			$name = $movie['movie_name'];
			$rating = $movie['movie_rating'];
			$year = $movie['year'];
			$price = $movie['price'];
			$cat_array = array();

			$query = "SELECT * FROM CATEGORY WHERE movie_id = $id AND isDeleted = 0;";
			$cat_result = mysqli_query($mysql,$query);
			while($cat = mysqli_fetch_array($cat_result)){
				$cat_temp = $cat['category'];
				array_push($cat_array,$cat_temp);
			}
			$single_movie = array('id'=>$id,'name'=>$name,'rating'=>$rating,'year'=>$year,'price'=>$price,'category'=>$cat_array);
			array_push($list,$single_movie);
		}
		return $list;	
	}



	$message = array('err'=>$err,'list'=>$list);
	echo json_encode($message);

?>