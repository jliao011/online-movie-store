$("document").ready(function(){
	
	$("#loginBtn").click(function(){
		$("#loginModal").css("display","block");
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



	
});