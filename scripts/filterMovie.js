$("document").ready(function() {

	search();

	$("body").on("click","#paging span",function(){
		var page = $(this).text();

		$("#paging span").each(function(){
			var i = $(this).text();
			if(i != page){
				$("#page"+i).hide();
			}else{
				$("#page"+i).fadeIn();
			}
		});

	});


	$("#searchBtn").on("click",function(){
		$("#slider").hide();
		$("div.addMovie").hide();
		$("div.shoppingCart").hide();
		$("div.history").hide();
		search();
		$("div.home").fadeIn();
		$("#paging").fadeIn();
		

	});





});
function search(){
		var movie_name = "";
		var category = "";
		movie_name = $("#search-name").val().trim();
		category = $("#search-category").val();
		$("#listing").html("");
		$("#paging").html("").hide();


		$.ajax({
			url:"filterMovie.php",
			data: {"movie_name":movie_name,"category":category},
			method: "post",
			dataType: "json",
			success: function(response){
				if(response.err == ""){
					$("div.home p.error").html("").hide();
				}else{
					$("div.home p.error").html(response.err).show();
				}

				var list = response.list;
				
				if(list.length == 0){
					$("div.home p.error").text("No search result.");
					$("div.home p.error").fadeIn();
				}

				// create paging
				var count = response.list.length;
				var page = Math.ceil(count /8);
				for(i=1;i<=page;i++){
					var p = $("<span></span>").addClass("btn btn-danger").text(i);
					$("#paging").append(p);
				}
				for(i=0;i<page;i++){
					var block = $("<div class = 'block'></div>").attr('id','page'+(i+1));
					
					for(offset=0;offset<8;offset++){
						var index = 8*i + offset;
						if(index == list.length){
							break;
						}
						var element = list[index];			
						(function(element,block){
							var id = element.id;
							var name = element.name;
							var price = element.price;	
							$.ajax({
								url:"readimage.php",
								data: {"movie_id":id},
								method: "post",
								success: function(img){
									var display = $("<article></article>").addClass("movie panel panel-default").attr('id',id);
									var head = $("<div></div>").addClass("panel-heading");
									var body = $("<div></div>").addClass("panel-body");
									var foot = $("<div></div>").addClass("panel-foot");
									var showprice = $("<span></span>").addClass("price").append("$").append(price);
									var catdiv = $("<div></div>").addClass("category");
									head.append(name);
									var image = $("<img>").attr('src',img);
								
									body.append(image);
							
									foot.append(element.category[0]);

									foot.append(showprice);
									display.append(head).append(body).append(foot);
									block.append(display);	
								
								},
								error: function(img){
									alert("cannot read image.")
								}
							});
						})(element,block);
					}
					$("#listing").append(block);
					block.hide();
				}
				
				$("#page1").fadeIn();	

			},
			error: function(){
				alert("Error: cannot link filterMovie.php.");
			}

		});	
}
