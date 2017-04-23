$("document").ready(function() {

	$("#filter-panel span.btn").click(function(){
		var movie_name = $("#search-name").val().trim();
		var category = $("#search-category").val();


		$.ajax({
			url:"filterMovie.php",
			data: {"movie_name":movie_name,"category":category},
			method: "post",
			dataType: "json",
			success: function(response){
				$("div.home p.error").html(response.err);

	
				$(response.list).each(function(index,element){
					var id = element.id;
					var name = element.name;
					var rating = element.rating;
					var year = element.year;
					var price = element.price;
					var category = [];
					$(element.category).each(function(index,element){
						category.push(element);
					});

					
					$("#listing").append(id+"  "+name+"  "+rating+"  "+year+"  "+price+"  "+category+"<br>");




				});



				

			},
			error: function(){
				alert("Error: cannot link filterMovie.php.");
			}


		});


		$("div.listMovie").text(movie_name + category);

	});













});