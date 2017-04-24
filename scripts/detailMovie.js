$("document").ready(function() {
	var id;

	$("#detail span.close").click(function(){	// close login modal
		$("#detail").fadeOut();
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
				$("#detail p.price").text("$"+price);
				$("#movieDetail p.category").text(category);
				/// update from
				$("form.updateMovie input[name='movie_id']").val(id);
				$("form.updateMovie input[name='movie_name']").val(name);
				$("form.updateMovie input[name='year']").val(year);
				$("form.updateMovie input[name='price']").val(price);


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
			success: function(response){
				if(response == ""){
					alert("Add to Shopping Cart Successfully.");
					$("#detail").fadeOut();
				}else{
					alert(response);
				}
			},
			error: function(){
				alert("cannot link addcart.php");
			}
		});
	});

	$("form.updateMovie").on('submit',(function(e) {
		var err = "";
		var yearFlag = false, priceFlag = false, imageFlag = false,synopsisFlag = false;
		e.preventDefault();
		var movie_name = $("form.updateMovie input[name='movie_name']").val().trim();
		var year = $("form.updateMovie input[name='year']").val();
		var price = $("form.updateMovie input[name='price']").val();
		var image = $("form.updateMovie input[name='image']").val();
		var synopsis = $("form.updateMovie input[name='synopsis']").val();
		if(!price.match(/^[0-9]+\.[0-9]{2}$/)){
			err += "Invalid price input, should have 2 decimal places.<br/>";
			priceFlag = false;
		}else{
			priceFlag = true;
		}
		if(!(year.match(/^[0-9]+$/) && year.length == 4)){
			err += "Invalid year input, should be 4-digit int.<br/>";
			yearFlag = false;
		}else{
			yearFlag = true;
		}
		valiImage = image.substring(image.length-4,image.length);
		valiSynopsis = synopsis.substring(synopsis.length-4,synopsis.length);
		if(valiImage != ".jpg"){
			err += "Invalid image input, should be .jpg file.<br/>";
			imageFlag = false;
		}else{
			imageFlag = true;
		}
		if(valiSynopsis != ".txt"){
			err += "Invalid synopsis input, should be .txt file.<br/>";
			synopsisFlag = false;
		}else{
			synopsisFlag = true;
		}
		if(err != ""){
			alert("Error: Please verify your input data.");
		}

		if(yearFlag && priceFlag && imageFlag && synopsisFlag){
			$.ajax({
				url: "updateMovie.php", // Url to which the request is send
				type: "POST",             // Type of request to be send, called as method
				data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
				contentType: false,       // The content type used when sending data to the server.
				cache: false,             // To unable request pages to be cached
				processData:false,        // To send DOMDocument or non processed data file it is set to false
				success: function(data)   // A function to be called if request succeeds
				{
					if(data == ""){
						alert("Update movie "+ movie_name +" successful!");
						$("#detail").fadeOut();
						
					}else{
						alert("Error: "+data);
					}
				
				}
			});	

		}

	}));





});