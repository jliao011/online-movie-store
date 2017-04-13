$(document).ready(function() {
	var num =/^[0-9]+$/i;
	var word =/^[a-zA-Z]+$/i;
	var valiemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	var emailFlag = false, usernameFlag = false, passwordFlag = false;

	$("#registerModal p.email input").on({
		focus: function(){
			emailFlag = false;
			$("#registerModal p.email .info").text("");
		},
		blur: function(){
			var email=$(this).val();
			if (email.length==0){
				$("#registerModal p.email .info").text("This field can't be blank").addClass("alert-danger").removeClass("alert-success");
			}
			else if(!valiemail.test(email)){
				$("#registerModal p.email .info").text("Invalid email address").addClass("alert-danger").removeClass("alert-success");
			}else{
				$("#registerModal p.email .info").html("&#10003").addClass("alert-success").removeClass("alert-danger");
				emailFlag = true;
			}
		}
	});

	$("#registerModal p.username input").on({
		focus: function(){
			usernameFlag = false;
			$("#registerModal p.username .info").text("");
		},
		blur: function(){
			var username=$(this).val();
			if (username.length==0){
				$("#registerModal p.username .info").text("This field can't be blank").addClass("alert-danger").removeClass("alert-success");
			}else{
				$("#registerModal p.username .info").html("&#10003").addClass("alert-success").removeClass("alert-danger");
				usernameFlag = true;
			}		
		}
	});

	$("#registerModal p.password input").on({
		focus: function(){
			var password=$(this).val();
			if(password==""){
				$("#registerModal p.password .info").text("");				
			}
		},
		blur: function(){
			var password=$(this).val();
			if (password.length==0){
				$("#registerModal p.password .info").text("This field can't be blank").addClass("alert-danger").removeClass("alert-success");
			}		
		},
		keyup: function(){
			var password=$(this).val();
		if (password.length<6 && password.length>=0) {
			$("#registerModal p.password .info").text("Weak").addClass("alert-danger").removeClass("alert-warning alert-success");
		}
		else if (num.test(password)||word.test(password)) {
			$("#registerModal p.password .info").text("Regular").addClass("alert-warning").removeClass("alert-danger alert-success");
		}
		else 
			$("#registerModal p.password .info").text("Strong").addClass("alert-success").removeClass("alert-danger alert-warning");				
		}
	});

	$("#registerModal p.repassword input").on({
		focus: function(){
			passwordFlag = false;
			$("#registerModal p.repassword .info").text("");
		},
		blur: function(){
			var repassword=$(this).val();
			var password = $("#registerModal p.password input").val();
			if (repassword != password){
				$("#registerModal p.repassword .info").text("Password not match").addClass("alert-danger").removeClass("alert-success");
			}else{
				$("#registerModal p.repassword .info").html("&#10003").addClass("alert-success").removeClass("alert-danger");
				passwordFlag = true;
			}			
		}
	});	

	$("#registerModal button").click(function(){
		if(emailFlag && usernameFlag && passwordFlag){
			$("#registerModal p.error").show();
			$("#registerModal p.error").text("success");
			$.ajax({
				url:"register.php",
				method: "post",
				data: {"email":email,"username":username,"password":password},
				success: function(response){
					alert("success");
					$("#registerModal p.error").html("response");
				},
				error: function(){
					alert("error");
				}
			});			
		}else{
			$("#registerModal p.error").show();
			$("#registerModal p.error").text("Invalid inputs.");
		}
	});








});