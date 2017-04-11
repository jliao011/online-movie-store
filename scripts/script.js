$("document").ready(function(){

	initial();


// *************** event *************
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




	
});

function initial(){
	$("div.home").show();
	$("div.shoppingCart").hide();
	$("div.history").hide();	
}