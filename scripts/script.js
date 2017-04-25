$("document").ready(function(){

	initial();


// *************** event *************
	$("#loginBtn").click(function(){	// click login button
		$("#loginModal").css("display","block");
		$("#loginModal p.error").hide();
		$("#loginModal input").val("");
	});

	$("#loginModal span.close").click(function(){	// close login modal
		$("#loginModal").fadeOut();
	});

	$("#registerBtn").click(function(){	// click register button
		$("#registerModal p.error").hide();
		$("#registerModal input").val("");
		$("#registerModal span.info").text("");
		$("#registerModal").css("display","block");
	});

	$("#registerModal span.close").click(function(){	// close register modal
		$("#registerModal").fadeOut();
	});

	$("#shoppingCartBtn").click(function(){	// click shopping chart button
		$("div.home").hide();
		$("div.history").hide();
		$("div.shoppingCart").fadeIn();


	});
	$("#purchaseHistoryBtn").click(function(){	// click purchase history button
		$("div.home").hide();
		$("div.history").fadeIn();
		$("div.shoppingCart").hide();
		$.ajax();

	});
	$("#homeBtn").click(function(){	// click home button
		$("div.home").fadeIn();
		$("div.shoppingCart").hide();
		$("div.history").hide();
		$("input").val("");	
		$.getScript('scripts/filterMovie.js', function() {
		    search();
		});

	});	

	$("#loginModal button").click(function(){	// login
		login();
	});



	$("#addMovieBtn").click(function(){	// admin add movie
		$("div.home").hide();
		$("div.shoppingCart").hide();
		$("div.history").hide();	
		$("div.addMovie").show();	
	});

	// $(".admin").show();
	// $("#userInfoBtn").show();


	
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
					alert("Welcome back, "+username);
					$("#userInfoBtn").text(response.username);
					$("#loginBtn").hide();
					$("#registerBtn").hide();
					$("#userInfoBtn").show();
					$("#loginModal").fadeOut();
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

