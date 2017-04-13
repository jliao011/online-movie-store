<?php
echo "init";
    if ( 0 < $_FILES['file']['error'] ) {
        echo 'Error: ';
    }
    else {
    	echo "success";
        move_uploaded_file($_FILES['file']['tmp_name'], 'upload/' . $_FILES['file']['name']);
        
    }
?>