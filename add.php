<?php
session_start();

echo '<br><h1>  Adding a Movie:  </h1> <h3> * Required Fields' ;
    echo '<h4>';
    echo '<form method="post" > <br>
      <b> Movie Name : </b> 
        <input type="text" name="movie_name" value=""> <br>  
      <b> Movie rating : </b> 
        <input type="text" name="movie_rating" value=""> <br>  
      <b> Year :  </b> 
        <input type="text" name="year" value=""> <br>  
      <b> Price : </b> 
        <input type="text" name="price" value=""> <br>
      <b> Category : </b> <select name="category"> 
        <option value=" " selected> ------------------- </option>
        <option value=" A "> A </option>
        <option value=" B "> B </option>
        <option value=" C "> C </option>     
        <option value=" D "> D </option>  
        <option value=" E "> E </option>
        <option value=" F "> F </option>
        <option value=" G "> G </option>
      <br> <br>   
        <input type="submit" class="btn btn-info" role="button" name="film_add" value="Add Movie"> 
   </form> '; 

$film_add = ($_POST['film_add']);
$movie = ($_POST['movie_name']);
$category = ($_POST['category']);
$rating = ($_POST['movie_rating']);
$year = ($_POST['year']);
$price = ($_POST['price']);     

echo "</h4>";

if ($film_add){
  if ($movie && $category && $rating && $year && $price){ 
    $conn = new mysqli('localhost', 'root', 'root', 'Movie_store');
    $query = 'INSERT INTO `Movie`(`movie_name`, `movie_rating`, `year`, `price`) VALUES ("'.$movie.'","'.$rating.'","'.$year.'", "'.$price.'")';

    $movie_id = 'SELECT movie_id FROM `Movie` WHERE `movie_name`="'.$movie.'"';
    $query = 'INSERT INTO `Category`(`movie_id`, `category`) VALUES ("'.$movie_id.'","'.$category.'")';
    echo ' <script type="text/javascript">
      alert("The movie has been successfully added.");
    </script> ';
  }
  else{
    echo ' <script type="text/javascript">
      alert("Fail to add new movie. Please check all required fields are filled.");
    </script> ';  
  }
}

?>
