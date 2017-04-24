<?php
	session_start();
	$err = "";

	$conn = new mysqli('localhost', 'root', 'root', 'Movie_store');
	if (mysqli_connect_errno()){
		$err .= "Failed to connect to MySQL: ".mysqli_connect_error().", ";
	}
	$movie_id = $_POST['movie_id'];
	$movie_name = mysqli_real_escape_string($conn,$_POST['movie_name']);
	$rating = $_POST['rating'];
	$year = $_POST['year'];
	$price = $_POST['price'];

	$query = "UPDATE MOVIE SET movie_name = '".$movie_name."',movie_rating = '".$rating."', year = '".$year."',price = '".$price."' WHERE movie_id = $movie_id;";



	if (!mysqli_query($conn,$query)) {
		$err .= "Error: ".$query.mysqli_error($conn).", ";
	}else{ // insert movie row successfully
		$query = "DELETE FROM CATEGORY WHERE movie_id = '".$movie_id."';";
		if (!mysqli_query($conn,$query)) {
			$err .= "Error: ".$query.mysqli_error($conn).", ";
		}	

		foreach ($_POST["category"] as $category) {
			$query = 'INSERT INTO `Category`(`movie_id`, `category`) VALUES ('.$movie_id.',"'.$category.'")';
			if (!mysqli_query($conn,$query)) {
				$err .= "Error: ".$query.mysqli_error($conn).", ";
			}		
		}	
		// upload image
		if ($_FILES["image"]["error"] > 0){
			$err .= "Return Code: " . $_FILES["image"]["error"] . ", ";
		}else{
			$sourcePath = $_FILES['image']['tmp_name']; // Storing source path of the file in a variable
			$_FILES["image"]["name"] = $movie_id.".jpg";
			$targetPath = "inventory/images/".$_FILES['image']['name']; // Target path where file is to be stored
			move_uploaded_file($sourcePath,$targetPath) ; // Moving Uploaded file
		}
		// upload synopsis
		if ($_FILES["synopsis"]["error"] > 0){
			$err .= "Return Code: " . $_FILES["synopsis"]["error"] . ", ";
		}else{
			$sourcePath = $_FILES['synopsis']['tmp_name']; // Storing source path of the file in a variable
			$_FILES["synopsis"]["name"] = $movie_id.".txt";
			$targetPath = "inventory/synopsis/".$_FILES['synopsis']['name']; // Target path where file is to be stored
			move_uploaded_file($sourcePath,$targetPath) ; // Moving Uploaded file
		}

	}
	echo $err;


?>
