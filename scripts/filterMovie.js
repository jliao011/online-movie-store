$("document").ready(function() {


	$("#filter-panel span.btn").click(function(){
		var movie_name = $("#search-name").val();
		var category = $("#search-category").val();
		$("div.listMovie").text(movie_name + category);

	});













});