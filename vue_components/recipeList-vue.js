var recipeList = 
`
<div id=recipeList>
    <ul>
        <li>
            <!--Master recipe list will include:
                    date added
                    recipe name
                    time it takes to make
                    minified macro info (i\.e total calories)-->
            <div class="recipeDateAdded"></div>
            <div class="recipeTitle"></div>
            <div class="recipeTime"></div>
            <div class="recipeCalorieCount"></div>
        </li>
    </ul>
    <div class="btnBack">
    <li v-for="item in buttons" :key="item.label" class="button">
        <button name="rbutton" type="button" class="button_action">{{item.label}}</button>
    </li>
    </div>
</div>
`