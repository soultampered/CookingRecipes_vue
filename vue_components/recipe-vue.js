Vue.component('add-recipe-form', {
    props: [
        'labels',
        'submit',
    ],

    template: addRecipeForm
});


Vue.component('recipe-list', {

template: recipeList
});

// Vue.component('recipe-view', {

// });


var app = new Vue({
    el: '#recipe',
    data: {
        formLabels: [
            { label: 'Recipe Name' },
            { label: 'Recipe Date' },
            { label: 'Recipe Author' },
            { label: 'Time to Prepare' },
            { label: 'Ingredient List' },
            { label: 'Recipe Instructions' }
        ],
        btnSubmit: 'submit',
    }

}); 