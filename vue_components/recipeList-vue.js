var recipeList = 
`
<div id=recipeList>
    <ul>
        <li>
            <div class="recipeTitle"></div>
            
            <div class="recipeTime"></div>
        </li>
    </ul>
    <div class="btnBack">
    <li v-for="item in buttons" :key="item.label" class="button">
        <button name="rbutton" type="button" class="button_action">{{item.label}}</button>
    </li>
    </div>
</div>
`