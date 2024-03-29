<?php
    // connect to database
    $conn = mysqli_connect('localhost','m_dye', 'Reaper7100', 'recipe_list');

    //check connection
    if(!$conn) {
        echo 'Connection error: ' . mysqli_connect_error();
    }
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="A simple recipe application to add and keep track of recipes you use">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>recipes</title>
    </head>
    <body>
        <div id="recipe">
            <recipe-list :recipeDetails="recipeDetails" :buttons="buttons"></recipe-list>
<!--            <add-recipe-form :labels="formLabels" :buttons="buttons"></add-recipe-form>-->
            <!-- <recipeView></recipeView> -->
        </div>

        <!-- <script type="text/Javascript" src="vue.min.js"></script> -->
        <script type="text/Javascript" src="vue_components/vue.js"></script>
        <script type="text/Javascript" src="vue_components/addRecipe-vue.js"></script>
        <script type="text/Javascript" src="vue_components/recipeList-vue.js"></script>
        <script type="text/Javascript" src="vue_components/recipe-vue.js"></script>
    </body>
</html>