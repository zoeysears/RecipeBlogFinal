/*
    JavaScript file for the recipe_form.html
    Author: Zoey Sears
    Date: 4.6.22
    Filename: recipe_form.js

    This javascript file will be used to validate form,
    adding data to recipe object
    
*/

var ingredients = [];
var steps = [];
var ingredientNum = 0;

function addIngredient() {
    console.log("Making it to function");
    var ingredientList = document.getElementById("ingredientSection");
    var ingredientName = document.createElement("li");
    var ingredient = document.getElementById("ingredient").value;
    ingredients[ingredientNum] = ingredient;
    document.getElementById("ingredient").value = "";
    ingredientName.innerHTML = ingredient[ingredientNum];
    ingredientList.appendChild(ingredientName);
    ingredientNum+=1;
    console.log(ingredients);
}

//Creates event listener based on user input on page
function createEventListener() {
    //Action of clicking on the 'Add Recipe' Button in the top right corner
    var addRecipeButton = document.getElementById("submit");
    if(addRecipeButton.addEventListener) {
        addRecipeButton.addEventListener("click", validateForm, false);
    } else if(addRecipeButton.attachEvent) {
        addRecipeButton.attachEvent("onclick", validateForm);
    }

    //Will add & validate Ingredient to array after 'Add Ingredient' button is pressed
    var addIngredient = document.getElementById("addIngredient");
    console.log("Create Event Listener")
    if(addIngredient.addEventListener) {
        addIngredient.addEventListener("click", addIngredient,false);
    } else if(addIngredient.attachEvent) {
        addIngredient.attachEvent("onclick", addIngredient);
    }
}

if(window.addEventListener) {
    window.addEventListener("load",createEventListener, false);
} else if(window.attachEvent) {
    window.attachEvent("load", createEventListener);
}