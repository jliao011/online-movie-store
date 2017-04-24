$("document").ready(function() {
	var id;

	$("#detail span.close").click(function(){	// close login modal
		$("#detail").css("display","none");
	});

	$("body").on("click","article.movie",function(){
		id = $(this).attr('id');
		$.ajax({
			url:"detailMovie.php",
			data: {"movie_id":id},
			method: "post",
			dataType: "json",
			success: function(response){
				var name = response.name;
				var rating = response.rating;
				var year = response.year;
				var price = response.price;
				var category = "";
				$(response.category).each(function(i,cat){
					category = category + cat + " ";
				});
				$("#detail h2").text(name);
				$("#detail p.rating").text(rating);
				$("#detail p.year").text(year);
				$("#detail p.price").text(price);
				$("#movieDetail p.category").text(category);
			},
			error: function(response){
				alert("cannot link detail movie.php");
			}
		});

		$.ajax({
			url:"readimage.php",
			data: {"movie_id":id},
			method: "post",
			success: function(img){
				$("#movieDetail img").attr('src',img);

			},
			error: function(img){
				alert("cannot fetch image");
			}
		});
		$.ajax({
			url:"readtext.php",
			data: {"movie_id":id},
			method: "post",
			success: function(text){
				$("#detail p.synopsis").text(text);

			},
			error: function(img){
				alert("cannot fetch text");
			}
		});

		$("#detail").css("display","block");
	
	});

	$("#movieDetail button").click(function(){
		$.ajax({
			url:"addCart.php",
			data: {"movie_id":id},
			method: "post",
			dataType: "json",
			success: function(response){
				if(response.err == ""){
					alert("Add to Shopping Cart Successfully.");
				}else{
					alert(response.err);
				}

			},
			error: function(){
				alert("cannot link addcart.php");
			}


		});


	});



});