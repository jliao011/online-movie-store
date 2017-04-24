$("document").ready(function(){

	/// delete from shopping cart
	$("body").on("click","div.item span.delete",function(){
		var itemClass = $(this).parent().parent().attr('id');
		var id = itemClass.substring(4,5);
		$.ajax({
			url:"deleteCart.php",
			data: {"movie_id":id},
			method: "post",
			success: function(response){
				alert(response);
				cart();
			},
			error: function(){
				alert("Error: cannot delete from shopping cart.");
			}
		});


	});

	/// select item
	$("body").on("change","div.item input[type='checkbox']",function(){	
		var totalprice = 0;
		var itemClass = $(this).parent().parent().parent().attr('id');
		var id = itemClass.substring(4,5);
		var checked = $(this).is(':checked');
		if(checked == true){
			var price = $("#cart"+id+" span.price").val();
			alert(price);
		}
		
	});


	//// init shopping cart
	$("#shoppingCartBtn").click(function(){
		$("div.shoppingCart p.error").hide();
		cart();

	});




function cart(){
		$("#cartListing").html("");
		$.ajax({
			url:"cart.php",
			method: "post",
			dataType: "json",
			success: function(response){
				if(response.err != ""){
					$("div.shoppingCart p.error").html(response.err);
					$("div.shoppingCart p.error").fadeIn();
				}else{
					$("div.shoppingCart p.error").hide();
				}
				var list = response.list;
				if(list.length == 0){
					$("div.shoppingCart h2").text("No item in your shopping cart.");
				}else{
					$("div.shoppingCart h2").text("You have "+list.length+" item(s) in your shopping cart.");
				}
				for(i=0;i<list.length;i++){
					var element = list[i];

					(function(element){	
						var id = element.id;
						var name = element.name;
						var rating = element.rating;
						var year = element.year;
						var price = element.price;	
						
						$.ajax({
							url:"readimage.php",
							data: {"movie_id":id},
							method: "post",
							success: function(img){

								var divitem = $("<div></div>").addClass("item");
								var divimage = $("<div></div>").addClass("image");
								var divinfo = $("<div></div>").addClass("info");
								var divprice = $("<div></div>").addClass("price");
								var divfunction = $("<div></div>").addClass("function");

								var image = $("<img>").attr('src',img);
								var title = $("<span></span>").addClass("title").html(name+"<hr/>");
								var detail = $("<span></span>").addClass("detail").text("Year: "+ year + "     "+"Rating: "+rating);
								var pricenum = $("<span></span>").addClass("price").text("$"+price);
								var deletebtn = $("<span></span>").addClass("delete btn btn-danger").html('<i class="material-icons" style="font-size: 30px">delete_forever</i>');
								var input = $("<input>").attr("type","checkbox").attr("name","select").css("zoom",1.5).val(id);
								var select = $("<span></span>").addClass("select").text("Select: ").append(input);

								divimage.append(image);
								divinfo.append(title).append(detail);
								divprice.append(pricenum);
								divfunction.append(deletebtn).append(select);

								divitem.attr("id","cart"+id).append(divimage).append(divinfo).append(divprice).append(divfunction);
								$("#cartListing").append(divitem);
							},
							error: function(img){
								alert("cannot read image.")
							}
						});
					})(element);
				}
			},
			error: function(){
				alert("Error: cannot link cart.php");
			}		
		});
}




});