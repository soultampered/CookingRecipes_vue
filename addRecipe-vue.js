var addRecipeForm = 
`
<div class=form>
    <form id="recipeForm" action="">
        <!-- recipe name -->
        <div class="fieldContainer">
            <label for="rname">Recipe Name</label>
            <input name="rname" id="rname_recipe" type="text" class="inputField fieldRequired" value="">
        </div>

        <div class="fieldContainer">
            <!-- date -->
            <label for="rdate">Date</label>
            <input name="rdate" id="rdate_recipe" type="text" class="inputField fieldRequired" value="">
        </div>
        
        <div class="fieldContainer">
            <!-- recipe author -->
            <label for="rauthor">Recipe Author</label>
            <input name="rauthor" id="rauthor_recipe" type="text" class="inputField fieldRequired" value="">
        </div>
        
        <div class="fieldContainer">
            <!-- Time to make -->
            <label for="rcookTime">Time to Prepare</label>
            <input name="rcookTime" id="rcooktime_recipe" type="text" class="inputField fieldRequired" value="">
        </div>
        
        <div class="fieldContainer">
            <!-- ingredient list -->
            <label for="ringredient">Ingredient List</label>
            <input name="ringredient" id="ringredient_recipe" type="text" class="inputField fieldRequired" value="">
        </div>
        
        <div class="fieldContainer">
            <!-- instructions -->
            <label for="rinstructions">Recipe Instructions</label>
            <input name="rinstructions" id="rinstructions_recipe" type="text" class="inputField fieldRequired" value="">
        </div>

        <div class="fieldContainer">
            <!-- submit button -->
            <button name="rsubmit" id="rsubmit_recipe" type="button" class="btn_submit">Submit</button>
        </div>
    </form>
</div>
`