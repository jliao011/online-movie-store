<?php
	session_start();
	$username = $password = "";	
	$err = "Wrong username or password, please try again.";
	
	$conn = new mysqli('localhost', 'root', '', 'Movie_store');
	
	if($_SERVER["REQUEST_METHOD"] == "POST"){
		$username = text_input($_POST['username']);
		$password = text_input($_POST['password']);
	}
	
	$redirect ="";
	
	$query = 'SELECT * FROM `user` WHERE `user_name`="'.$username.'" or `user_email`="'.$username.'"' ;	
	$result = $conn -> query($query);
	$row = mysqli_fetch_assoc($result);
	
	if(mysqli_num_rows($result) == 0){
		echo $err;
	} 
	else{
		if(sha1($password) == $row['password']){
			$_SESSION['username'] = $username;
			$_SESSION['id'] = $row['user_id'];
			
			if(strcmp($row['user_name'],"admin")){
				echo 'admin';
			} 
			else{
				echo 'user';
			}
		}
		else {
			echo $err;
		}
	}
	
	function text_input($data){
 		$data = trim($data);
  		$data = stripslashes($data);
  		$data = htmlspecialchars($data);
  		return $data;
	}
?>
