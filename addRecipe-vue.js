var addRecipeForm =
`
    <div class=addForm>
        <form id="recipeForm" action="">
        <ul id="formLabelList">
            <li v-for="item in labels" :key="item.label" class="fieldContainer">
                <label for="rname">{{item.label}}</label>
                <input name="rname" id="rname_recipe" type="text" class="inputField fieldRequired" value="">
            </li>
        </ul>

        <div class="fieldContainer">
            <button name="rsubmit" id="rsubmit_recipe" type="button" class="btn_submit">{{ submit }}</button>
        </div>
        </form>
    </div>

`