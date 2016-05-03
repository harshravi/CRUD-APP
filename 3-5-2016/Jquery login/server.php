<?php

if(issue($_POST["password"])){
	$password = $_POST["password"];
	$login = $_POST["login"];
	
	$database = file_get_contents("database.txt");
	
	$pairs = explode("_",$database);
	for($i=0;$i<3;$i++){
		$user = explode(":",$pairs[$i]);
		if(($user[0] == $login)&& ($user[1] == $password)){
			echo "Welcome," . $user[0] . "<br> <h1> Welcome to the Dashboard</h1>";
			$loggedin = 1;
		}
	}
	if($loggedin != 1){
		echo "wrong login";  
	}
}
?>