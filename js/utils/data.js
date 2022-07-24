import { Ingredients } from "../factory/Ingredients.js";

import { Appareil } from "../factory/Appareil.js";
import { Ustensils } from "../factory/Ustensils.js";
//import { Recipe } from "../factory/Recipe.js";
import { TextCard } from "../factory/TextCard.js";
//import { globalFunctions } from "./globalFunctions.js";
import { variables } from "./variables.js";

let recettes = variables.recettes;
export let AllIds = [];
export let ingredientsArray = [];
export let appareils = [];
export let ustensiles = [];
export let recipeTextArray = [];

export function loadData() {
  recettes.forEach((elt) => {
    //makeID(elt);
    makeText(elt);
    makeIngredient(elt);
    makeUstensils(elt);
    makeAppareil(elt);
  });
  return {
    ingredientsArray,
    appareils,
    ustensiles,
    recipeTextArray,
    recettes,
  };
}

console.log(ingredientsArray,
  appareils,
  ustensiles,
  recipeTextArray,
  recettes,);

// function makeID(recipe) {
//   const { id } = recipe;
//   AllIds.push(id);
// }

function makeText(recipe) {
  const { ingredients, name, id, description } = recipe;
  //console.log(ingredients, recipe);
  // const i = ingredients.map((ing) => ing.ingredient.toLowerCase());
  const textIngredient = ingredients.reduce((accumulateur, current) => {
    return accumulateur.concat(" ").concat(current.ingredient.toLowerCase());
  }, "");
 //console.log(textIngredient);
  recipeTextArray.push(
    new TextCard(
      id,
      name
        .toLowerCase()
        .concat(",")
        .concat(textIngredient)
        .concat(", ")
        .concat(description.toLowerCase()),
      { ...recipe }
    )
  );
}

function makeIngredient(recipe) {
  const { ingredients, id } = recipe;
  for (let i of ingredients) {
    //console.log(i.ingredient);
    ingredientsArray.push(new Ingredients(i.ingredient, id, { ...recipe }));
  }
}

function makeUstensils(recipe) {
  const { ustensils, id } = recipe;
  for (let u of ustensils) {
    ustensiles.push(new Ustensils(u, id, { ...recipe }));
  }
}

function makeAppareil(recipe) {
  const { appliance, id } = recipe;
  appareils.push(new Appareil(appliance, id, { ...recipe }));
}
