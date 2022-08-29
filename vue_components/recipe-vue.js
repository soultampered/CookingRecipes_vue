Vue.component('add-recipe-form', {
    props: [
        'labels',
        'buttons',
    ],

    methods: {
        submitForm(event) {
            console.log('the click event works');
            document.getElementById('recipeForm').submit();
        }
        
    },

    template: addRecipeForm
});


Vue.component('recipe-list', {
    props: [
        'labels',
        'buttons',
    ],

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
        buttons: [
            { label: 'submit' },
            { label: 'back' }
        ],
    }

}); 