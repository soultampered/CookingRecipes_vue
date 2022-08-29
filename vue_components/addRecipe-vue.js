var addRecipeForm =
`
    <div id=addForm>
        <form id="recipeForm" action="">
        <ul id="formLabelList">
            <li v-for="item in labels" :key="item.label" class="fieldContainer">
                <label for="rname">{{item.label}}</label>
                <input name="rname" id="rname_recipe" type="text" class="inputField fieldRequired" value="">
            </li>
        </ul>

        <div class="fieldContainer">
            <li v-for="item in buttons" :key="item.label" class="button">
                <button name="rbutton" type="button" class="button_action">{{item.label}}</button>
            </li>
        </div>
        </form>
    </div>

`