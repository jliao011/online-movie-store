$("document").ready(function(){

	initial();


// *************** event *************
	$("#loginBtn").click(function(){
		$("#loginModal").css("display","block");
		$("#loginModal p.error").hide();
		$("#loginModal input").val("");
	});

	$("#loginModal span.close").click(function(){
		$("#loginModal").css("display","none");
	});

	$("#registerBtn").click(function(){
		$("#registerModal p.error").hide();
		$("#registerModal").css("display","block");
	});

	$("#registerModal span.close").click(function(){
		$("#registerModal").css("display","none");
	});

	$("#shoppingCartBtn").click(function(){
		$("div.home").hide();
		$("div.history").hide();
		$("div.shoppingCart").show();
		$.ajax();

	});
	$("#purchaseHistoryBtn").click(function(){
		$("div.home").hide();
		$("div.history").show();
		$("div.shoppingCart").hide();
		$.ajax();

	});
	$("#homeBtn").click(function(){
		initial();
		$.ajax();

	});	

	$("#loginModal button").click(function(){
		login();
	});

	$("#registerModal button").click(function(){
		register();
	});

	$("#addMovieBtn").click(function(){
		$.ajax({
			url:"addMovie.php",
			success: function(response){
				$("div.admin").html(response);
			},
			error: function(){
				alert("error");
			}

		});
	});
	
});

function initial(){
	$("div.home").show();
	$("div.shoppingCart").hide();
	$("div.history").hide();	
	$(".admin").hide();
	$("#userInfoBtn").hide();
}

function login(){
	var username = $("#loginModal input[name='username']").val();
	var password = $("#loginModal input[name='password']").val();
	if(username == ""){
		$("#loginModal p.error").show().html("Please enter your user name or email address.");	
	}else if(password == ""){
		$("#loginModal p.error").show().html("Please enter your password.");
	}else{
		$.ajax({
		url:"login.php",
		data: {"username":username,"password":password},
		method: "post",
		dataType: "json",
		success: function(response){
			if(response.err == ""){
				alert("Login Successful.");
				$("#userInfoBtn").text(response.username);
				$("#loginBtn").hide();
				$("#registerBtn").hide();
				$("#userInfoBtn").show();
				$("#loginModal").css("display","none");
				if(response.usertype == "admin"){
					$(".admin").show();
				}else{
					$(".admin").hide();
				}
			}else{
				$("#loginModal p.error").show().html(response.err);
			}
		},
		error: function(){
			alert("Error: cannot link login.php.");
		}
	});		
	}
}

function register(){
	var username = $("form [name='newusername']").val();
	var password = $("form [name='newpassword']").val();
	var email = $("form [name='email']").val();

	$.ajax({
		url:"register.php",
		method:"post",
		data: {"username":username,"password":password,"email":email},
		success: function(response){
			$("#result").html(response);
		},
		error: function(){
			alert("error");
		}
	});
}