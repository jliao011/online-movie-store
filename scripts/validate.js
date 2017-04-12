$(document).ready(function() {


        var num =/^[0-9]+$/i;
        var word =/^[a-zA-Z]+$/i;

        $("#newusername").blur(function(){
        $("#usernameInfo").text("This field can't be blank");
        $("#usernameInfo").show();
        });


        $("#newpassword").blur(function(){
          var password=$(this).val();

        if (password.length==0){
          $("#passwordInfo").text("This field can't be blank");

        }

        else if (password.length<6) {
          $("#passwordInfo").text("Weak Password");
        }

        else if (num.test(password)||word.test(password)) {
          $("#passwordInfo").text("Regular Password");
        }
        else 
          $("#passwordInfo").text("Strong Password");

        $("#passwordInfo").show();
        
        });

        $("#newemail").blur(function(){
        $("#emailInfo").text("This field can't be blank");
        $("#emailInfo").show();
        });

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
