/* JavaScript file for recipe_blog.html
    Author: Zoey Sears
    Date: 4.6.22
    Filename: recipe.js

    This file will contain all the code for viewing & displaying recipes
    Adding the recipes to array 
*/

//redirects user to a new tab that contains recipe form
function addRecipe() {
    window.open('recipe_form.html', '_blank');
}

//Creates event listener based on user input on page
function createEventListener() {

    //Action of clicking on the 'Add Recipe' Button in the top right corner
    var addRecipeButton = document.getElementById("addRecipeButton");
    if(addRecipeButton.addEventListener) {
        addRecipeButton.addEventListener("click", addRecipe, false);
    } else if(addRecipeButton.attachEvent) {
        addRecipeButton.attachEvent("click", addRecipe);
    }
}

if(window.addEventListener) {
    window.addEventListener("load",createEventListener, false);
} else if(window.attachEvent) {
    window.attachEvent("load", createEventListener);
}