<?php
	session_start();
	$err = "";

	$conn = new mysqli('localhost', 'root', 'root', 'Movie_store');
	if (mysqli_connect_errno()){
		$err .= "Failed to connect to MySQL: ".mysqli_connect_error()."<br/>";
	}
	$movie_name = mysqli_real_escape_string($conn,$_POST['movie_name']);
	$query = "SELECT * FROM MOVIE WHERE movie_name = '".$movie_name."';";
	$result = mysqli_query($conn,$query);
	if(mysqli_num_rows($result)!=0){
		$query = "UPDATE MOVIE SET isDeleted = 0 WHERE movie_name = '".$movie_name."';";
		if (!mysqli_query($conn,$query)) {
			$err .= "Error: ".$query.mysqli_error($conn)."<br/>";
		}	
	}else{
		$rating = $_POST['rating'];
		$year = $_POST['year'];
		$price = $_POST['price'];
		$query = 'INSERT INTO `Movie`(`movie_name`, `movie_rating`, `year`, `price`) VALUES ("'.$movie_name.'","'.$rating.'","'.$year.'", '.$price.');';
		if (!mysqli_query($conn,$query)) {
			$err .= "Error: ".$query.mysqli_error($conn)."<br/>";
		}else{ // insert movie row successfully
			$query = 'SELECT movie_id FROM `Movie` WHERE `movie_name`="'.$movie_name.'";';
			$result = $conn -> query($query);
			$row = mysqli_fetch_array($result);
			$movie_id = $row['movie_id'];
			foreach ($_POST["category"] as $category) {
				$query = 'INSERT INTO `Category`(`movie_id`, `category`) VALUES ('.$movie_id.',"'.$category.'")';
				if (!mysqli_query($conn,$query)) {
					$err .= "Error: ".$query.mysqli_error($conn)."<br/>";
				}		
			}	
			// upload image
			if ($_FILES["image"]["error"] > 0){
				$err .= "Return Code: " . $_FILES["image"]["error"] . "<br/>";
			}else{
				$sourcePath = $_FILES['image']['tmp_name']; // Storing source path of the file in a variable
				$_FILES["image"]["name"] = $movie_id.".jpg";
				$targetPath = "inventory/images/".$_FILES['image']['name']; // Target path where file is to be stored
				move_uploaded_file($sourcePath,$targetPath) ; // Moving Uploaded file
			}
			// upload synopsis
			if ($_FILES["synopsis"]["error"] > 0){
				$err .= "Return Code: " . $_FILES["synopsis"]["error"] . "<br/>";
			}else{
				$sourcePath = $_FILES['synopsis']['tmp_name']; // Storing source path of the file in a variable
				$_FILES["synopsis"]["name"] = $movie_id.".txt";
				$targetPath = "inventory/synopsis/".$_FILES['synopsis']['name']; // Target path where file is to be stored
				move_uploaded_file($sourcePath,$targetPath) ; // Moving Uploaded file
			}

		}

	}

	echo $err;


?>
