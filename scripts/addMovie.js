
$(document).ready(function () {
	$("div.addMovie p.error").hide();
	$("form.addMovie").on('submit',(function(e) {
		var err = "";
		var yearFlag = false, priceFlag = false, imageFlag = false,synopsisFlag = false;
		$("p.error").html(err);
		e.preventDefault();
		var movie_name = $("form.addMovie input[name='movie_name']").val().trim();
		var year = $("form.addMovie input[name='year']").val();
		var price = $("form.addMovie input[name='price']").val();
		var image = $("form.addMovie input[name='image']").val();
		var synopsis = $("form.addMovie input[name='synopsis']").val();
		if(!price.match(/^[0-9]+\.[0-9]{2}$/)){
			err += "Invalid price input, should have 2 decimal places.<br/>";
			priceFlag = false;
			$("p.error").html(err);
		}else{
			priceFlag = true;
		}
		if(!(year.match(/^[0-9]+$/) && year.length == 4)){
			err += "Invalid year input, should be 4-digit int.<br/>";
			yearFlag = false;
			$("p.error").html(err);
		}else{
			yearFlag = true;
		}
		valiImage = image.substring(image.length-4,image.length);
		valiSynopsis = synopsis.substring(synopsis.length-4,synopsis.length);
		if(valiImage != ".jpg"){
			err += "Invalid image input, should be .jpg file.<br/>";
			imageFlag = false;
			$("p.error").html(err);
		}else{
			imageFlag = true;
		}
		if(valiSynopsis != ".txt"){
			err += "Invalid synopsis input, should be .txt file.<br/>";
			synopsisFlag = false;
			$("p.error").html(err);
		}else{
			synopsisFlag = true;
		}
		if(err != ""){
			$("div.addMovie p.error").show();
		}else{
			$("div.addMovie p.error").hide();
		}

		if(yearFlag && priceFlag && imageFlag && synopsisFlag){
			$.ajax({
				url: "addMovie.php", // Url to which the request is send
				type: "POST",             // Type of request to be send, called as method
				data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
				contentType: false,       // The content type used when sending data to the server.
				cache: false,             // To unable request pages to be cached
				processData:false,        // To send DOMDocument or non processed data file it is set to false
				success: function(data)   // A function to be called if request succeeds
				{
					if(data == ""){
						$("div.addMovie p.error").hide();
						alert("Add movie "+ movie_name +" successful!");
						$.getScript('scripts/filterMovie.js', function() {
						    search();
						});						
					}else{
						$("div.addMovie p.error").show();
						$("div.addMovie p.error").html(data);
					}
				
				}
			});			
		}


	}));
});