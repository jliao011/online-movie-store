<?php
	session_start();
	$email = $username = $password = "";
	$err = "User already exists";
	
	$conn = new mysqli('localhost', 'root', 'root', 'Movie_store');
	
	if($_SERVER["REQUEST_METHOD"] == "POST"){
		$email = text_input($_POST["user_email"]);
		$username = text_input($_POST["user_name"]);
		$password = text_input($_POST['password']);
	}
	
	$query = 'SELECT * FROM `user` WHERE `user_name`="'.$username.'"';
	$result = $conn -> query($query);
	if(mysqli_num_rows($result) == 0){
		$sha1pwd = sha1($password);
		$query = 'INSERT INTO `user`(`user_email`, `user_name`, `password`) VALUES ("'.$email.'","'.$username.'","'.$sha1pwd.'")';
		$result = $conn -> query($query);
		$_SESSION['username'] = $username;
		echo "Successfully login.";
	}
	else{
		echo $err;
	}
		
	function text_input($data)
	{
 		$data = trim($data);
  		$data = stripslashes($data);
  		$data = htmlspecialchars($data);
  		return $data;
	}
?>
