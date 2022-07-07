
import { Ingredients } from "../factory/Ingredients.js";

import { Appareil } from "../factory/Appareil.js";
import { Ustensils } from "../factory/Ustensils.js";
//import { Recipe } from "../factory/Recipe.js";
import { TextCard } from "../factory/text.js";
//import { globalFunctions } from "./globalFunctions.js";
import { variables } from "./variables.js";


let recettes = variables.recettes
export let AllIds = [];
export let ingredientsArray = [];
export let appareils = [];
export let ustensiles = [];
export let recipeTextArray = []


export function loadData() {
    
  recettes.forEach((elt) => {
    makeID(elt);
    makeText(elt);
    makeIngredient(elt);
    makeUstensils(elt);
    makeAppareil(elt);
    
  });
  return {
    ingredientsArray,
    appareils,
    ustensiles,
    AllIds,
    recipeTextArray,
    recettes,
  };
}

console.log(ingredientsArray);


function makeID(recipe) {
  const { id } = recipe;
  AllIds.push(id);
}

function makeText(recipe) {
  const { ingredients, name, id, description } = recipe;
  const i = ingredients.map((ing) => ing.ingredient.toLowerCase());

  recipeTextArray.push(
    new TextCard(
      id,
      name
        .toLowerCase()
        .concat(",")
        .concat(i)
        .concat(",")
        .concat(description.toLowerCase())
    )
  );
}

function makeIngredient(recipe) {
  const { id, ingredients } = recipe;
  for (let i of ingredients) {
    const ingred = getIngredients(i.ingredient);
    if (ingred != undefined) {
      ingred.id.push(id);
    } else {
      ingredientsArray.push(new Ingredients(i.ingredient, [id]));
    }
  }

  function getIngredients(string) {
    return ingredientsArray.find((e) => e.name === string);
  }
}

function makeUstensils(recipe) {
  const { id, ustensils } = recipe;
  for (let u of ustensils) {
    const ustens = getUstensils(u);
    if (ustens != null) {
      ustens.id.push(id);
    } else {
      const ust = new Ustensils(u, [id]);
      ustensiles.push(ust);
    }
  }
  function getUstensils(string) {
    return ustensiles.find((e) => e.name === string);
  }
}

function makeAppareil(recipe) {
  const { id, appliance } = recipe;
  const app = getAppareil(appliance);
  if (app != undefined) {
    app.id.push(id);
  } else {
    const appl = new Appareil(appliance, [id]);
    appareils.push(appl);
  }
  function getAppareil(string) {
    return appareils.find((e) => e.name === string);
  }
}

