/*
    JavaScript file for the recipe_form.html
    Author: Zoey Sears
    Date: 4.6.22
    Filename: recipe_form.js

    This javascript file will be used to validate form,
    adding data to recipe object
    
*/

function validateForm() {
    //Gets all the values from the form
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
}

//Creates event listener based on user input on page
function createEventListener() {
    //Action of clicking on the 'Add Recipe' Button in the top right corner
    var addRecipeButton = document.getElementById("submit");
    if(addRecipeButton.addEventListener) {
        addRecipeButton.addEventListener("click", validateForm, false);
    } else if(addRecipeButton.attachEvent) {
        addRecipeButton.attachEvent("click", validateForm);
    }
}

if(window.addEventListener) {
    window.addEventListener("load",createEventListener, false);
} else if(window.attachEvent) {
    window.attachEvent("load", createEventListener);
}