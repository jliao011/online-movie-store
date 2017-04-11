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


	
});

function initial(){
	$("div.home").show();
	$("div.shoppingCart").hide();
	$("div.history").hide();	
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
		success: function(response){
			$("#loginModal p.error").show().html(response);
		},
		error: function(){
			alert("Error: cannot link login.php.");
		}
	});		
	}












	// $("#loginModal p.error").show().html(username+password);
}