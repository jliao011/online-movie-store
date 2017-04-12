$(document).ready(function() {


        var num =/^[0-9]+$/i;
        var word =/^[a-zA-Z]+$/i;
        var valemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        $("#newusername").blur(function(){
                var username=$(this).val();
                if (username.length==0){
            $("#usernameInfo").text("This field can't be blank");
                }
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
          var email=$(this).val();
          if (email.length==0){
            $("#emailInfo").text("This field can't be blank");
                }
        else if(!valiemail.test(email)){
               $("#emailInfo").text("Invalid email address");
             }

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
