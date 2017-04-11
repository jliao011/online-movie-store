$(document).ready(function() {

	var valiName = /^[a-z0-9]+$/i;
	var valiPassword = 8;
	var valiEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	$("#username").after($("<span></span>").attr("id","usernameInfo").addClass("info"));
	$("#password").after($("<span></span>").attr("id","passwordInfo").addClass("info"));
    $("#email").after($("<span></span>").attr("id","emailInfo").addClass("info"));
    $(".info").hide();


    $("#username").focus(function(){
    	$("#usernameInfo")
    	$("#usernameInfo").text("The username field must contain only alphabetical or numeric characters.").addClass("info").removeClass("ok error");
    	$("#usernameInfo").show();
    });

    $("#username").blur(function(){
    	var username=$(this).val();
    	if (username.length==0) 
    	{
    		$("#usernameInfo").text("This field can't be blank").addClass("info").removeClass("ok error");
            $("#usernameInfo").show();  
    	}
    	else if (!valiName.test(username)) 
    	{
    		$("#usernameInfo").text("Invalid username").addClass("error").removeClass("info ok");
    		$("#usernameInfo").show();	
    	}
    	else
    	{
    		$("#usernameInfo").text("OK").addClass("ok").removeClass("info error");
    		$("#usernameInfo").show();
    	}
    });


    $("#password").focus(function(){
    	$("#passwordInfo").text("The password field should be at least 8 characters long.").addClass("info").removeClass("ok error");
    	$("#passwordInfo").show();
    });

    $("#password").blur(function(){
    	var password = $(this).val();
			if(password.length == 0)
			{
				$("#passwordInfo").text("This field can't be blank").addClass("info").removeClass("ok error");
                $("#passwordInfo").show();
			}
			else if(password.length < valiPassword)
			{
				$("#passwordInfo").text("Invalid password").addClass("error").removeClass("info ok");
				$("#passwordInfo").show();
			}
			else
			{
				$("#passwordInfo").text("OK").addClass("ok").removeClass("info error");
				$("#passwordInfo").show();
			}
    });

    $("#email").focus(function(){

    	$("#emailInfo").text("The email field should be a valid email address").addClass("info").removeClass("ok error");
    	$("#emailInfo").show();
    });

    $("#email").blur(function(){
    	var email = $(this).val();
		if (email.length==0) 
		{
			$("#emailInfo").text("This field can't be blank").addClass("info").removeClass("ok error");
            $("#emailInfo").show();
		}	
		else if (!valiEmail.test(email)) 
		{
			$("#emailInfo").text("Invalid Email address").addClass("error").removeClass("info ok");
			$("#emailInfo").show();
		}
		else
		{
			$("#emailInfo").text("OK").addClass("ok").removeClass("info error");
			$("#emailInfo").show();
		}
    });
    function register(){
    var username = $("form [name='newusername']").val();
    var password = $("form [name='newpassword']").val();
    var email = $("form [name='newemail']").val();

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

});
