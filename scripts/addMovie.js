$("document").ready(function(){
	$("div.addMovie button").click(function(){
		var movie_name = $("div.addMovie input[name='movie_name']").val();
		var year = $("div.addMovie input[name='year']").val();
		var price = $("div.addMovie input[name='price']").val();
		var movie_rating = $("div.addMovie select[name='movie_rating']").val();
		var category = $("div.addMovie select[name='category']").val(); // array
		var image = $("div.addMovie input[name='image']");
		$("div.addMovie p.error").html(movie_name+year+price+movie_rating+category[0]+image);
		var file = new FormData();
		file.append("file",image);
		$.ajax({
			url:"store.php",
			dataType: "text",
			cache: false,
			contentType: false,
			processData: false,
			data: file,
			type: 'post',
			success: function(response){
				alert(response);
			},
			error: function(){
				alert("Error: cannot send");
			}

		});




	});






});