<?php
	session_start();
	$username = $password = "";	
	$err = "Wrong username or password, please try again.";
	
	$conn = new mysqli('localhost', 'root', '', 'create_movie_store');
	
	if($_SERVER["REQUEST_METHOD"] == "POST"){
		$username = text_input($_POST['username']);
		$password = text_input($_POST['password']);
	}
	
	$redirect ="";
	
	$query = 'SELECT * FROM `user` WHERE `username`="'.$username.'" or `email`="'.$username.'"' ;	
	$result = $conn -> query($query);
	$row = mysqli_fetch_assoc($result);
	
	if(mysqli_num_rows($result) == 0){
		echo $err;
	} else{
		if($password == $row['password']){
			$_SESSION['username'] = $username;
			$_SESSION['name'] = $row['name'];
			
			if(strcmp($row['privileges'],"a")){
				echo 'admin"';
			} else{
				echo 'user';
			}
		}
		else {
			echo $err;
		}
	}
	
	function text_input($data)
	{
 		$data = trim($data);
  		$data = stripslashes($data);
  		$data = htmlspecialchars($data);
  		return $data;
	}
?>