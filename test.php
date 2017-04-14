<?php
	$err = "";
	if ($_FILES["image"]["error"] > 0){
		$err .= "Return Code: " . $_FILES["image"]["error"] . "<br/>";
	}else{
		$sourcePath = $_FILES['image']['tmp_name']; // Storing source path of the file in a variable
		$_FILES["image"]["name"] = "test.jpg";
		$targetPath = "inventory/images/".$_FILES['image']['name']; // Target path where file is to be stored
		move_uploaded_file($sourcePath,$targetPath) ; // Moving Uploaded file
		$err .= "<span id='success'>Image Uploaded Successfully...!!</span><br/>";
		$err .= "<br/><b>File Name:</b> " . $_FILES["image"]["name"] . "<br>";
		$err .= "<b>Type:</b> " . $_FILES["image"]["type"] . "<br>";
		$err .= "<b>Size:</b> " . ($_FILES["image"]["size"] / 1024) . " kB<br>";
		$err .= "<b>Temp file:</b> " . $_FILES["image"]["tmp_name"] . "<br>";
	}

	if ($_FILES["synopsis"]["error"] > 0){
		$err .= "Return Code: " . $_FILES["synopsis"]["error"] . "<br/>";
	}else{
		$sourcePath = $_FILES['synopsis']['tmp_name']; // Storing source path of the file in a variable
		$_FILES["synopsis"]["name"] = "test.txt";
		$targetPath = "inventory/synopsis/".$_FILES['synopsis']['name']; // Target path where file is to be stored
		move_uploaded_file($sourcePath,$targetPath) ; // Moving Uploaded file
		$err .= "<span id='success'>Image Uploaded Successfully...!!</span><br/>";
		$err .= "<br/><b>File Name:</b> " . $_FILES["synopsis"]["name"] . "<br>";
		$err .= "<b>Type:</b> " . $_FILES["synopsis"]["type"] . "<br>";
		$err .= "<b>Size:</b> " . ($_FILES["synopsis"]["size"] / 1024) . " kB<br>";
		$err .= "<b>Temp file:</b> " . $_FILES["synopsis"]["tmp_name"] . "<br>";
	}





	echo $err;
	print_r ($_POST["movie_name"]);
	foreach ($_POST["category"] as $category) {
		echo $category;
	}

?>