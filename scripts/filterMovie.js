$("document").ready(function() {


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






	$("#filter-panel span.btn").on("click",function(){
		var movie_name = $("#search-name").val().trim();
		var category = $("#search-category").val();
		$("#listing").html("");
		$("#paging").html("");


		$.ajax({
			url:"filterMovie.php",
			data: {"movie_name":movie_name,"category":category},
			method: "post",
			dataType: "json",
			success: function(response){
				$("div.home p.error").html(response.err);
				var list = response.list;

				// create paging
				var count = response.list.length;
				var page = Math.ceil(count /4);
				for(i=1;i<=page;i++){
					var p = $("<span></span>").addClass("btn btn-danger").text(i);
					$("#paging").append(p);
				}
				for(i=0;i<page;i++){
					var block = $("<div class = 'block'></div>").attr('id','page'+(i+1));
					
					for(offset=0;offset<4;offset++){
						var index = 4*i + offset;
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
									head.append(name);
									var image = $("<img>");
									image.attr('src',img);
									body.append(image);
									$(element.category).each(function(i,cat){
										foot.append(cat).append(" ");
									});

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

	});





});

