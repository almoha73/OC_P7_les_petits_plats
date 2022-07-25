import {
  recipeTextArray,
  ingredientsArray,
  appareils,
  ustensiles,
} from "../utils/data.js";
import { Tags } from "../Tags/tag.js";
import {} from "../index.js";
import { variables } from "../utils/variables.js";
import { globalFunctions } from "../utils/globalFunctions.js";
import { ParamFilter } from "../utils/ParamFilter.js";

export let resultsMain = [];
export let arrayAll = [];

const listes = [
  variables.buttonIngredientsList,
  variables.buttonApplianceList,
  variables.buttonUstensilsList,
];
const inputTags = Array.from(variables.inputTag);
//console.log(inputTags);
const error = document.querySelector(".erreur");
console.log(error);
const recipesList = document.querySelector("#recipes-list");
console.log(recipesList);
///
export const submitOnClick = () => {
  listes.forEach((elt) =>
    elt.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.tagName === "LI") {
        const value = e.target.innerHTML.toLowerCase();
        console.log(value);
        const node = e.target.parentElement;
        //console.log(node);
        const id = node.getAttribute("id");
        console.log(id);

        switch (id) {
          case "ingredients": {
            displayTagRecipe(ingredientsArray, value);
            const tag = new Tags(value, "ingredients");
            tag.buildTag();
            break;
          }
          case "appliances": {
            displayTagRecipe(appareils, value);
            const tag = new Tags(value, "appliances");
            tag.buildTag();
            break;
          }
          case "ustensils": {
            displayTagRecipe(ustensiles, value);
            const tag = new Tags(value, "ustensils");
            tag.buildTag();
            break;
          }
        }
      }
    })
  );
};

export const inputTagSelected = () => {
  let val;

  inputTags.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.preventDefault();
      val = getSearchTerm(input);
      console.log(val);
      if (input === inputTags[0]) {
        globalFunctions.buttonIngredientListPreview(variables.recettes, val);
      } else if (input === inputTags[1]) {
        globalFunctions.buttonApplianceListPreview(variables.recettes, val);
      } else if (input === inputTags[2]) {
        globalFunctions.buttonUstensilsListPreview(variables.recettes, val);
      }
    });
    input.addEventListener("focusout", (e) => {
      e.preventDefault();
      input.value = "";
    });
  });
};

export const unselectedTag = (event) => {
  const target = event.target;
  console.log(target);
  if (target.tagName === "LI" || target.tagName === "li") {
    const val = target.innerHTML.toLowerCase();
    target.remove();
    const i = arrayAll.findIndex((item) => item.equals(new ParamFilter(val)));
    arrayAll.splice(i, 1);
    if (arrayAll.length > 0) {
      updateRecipe(
        globalFunctions.intersect(arrayAll.map((elt) => elt.values))
      );
    } else {
      updateRecipe(variables.recettes);
      error.style.display = "none";
    }
  }
};

export const submitTheSearch = () => {
  let value = getSearchTerm(variables.formControl);
  resultsMain.splice(0, resultsMain.length)
  filterRecipe(value);
  console.log(resultsMain);
  // let newArrayText = filterRecipe(value);
  // console.log(newArrayText);
  // for (let elt of newArrayText) {
  //   resultsMain.push(elt.recipe);
  //   return resultsMain;
  // }
  let find = false;
  if (arrayAll.length > 0) {
    if (
      arrayAll.some((elt) => {
        if (!elt.equals(new ParamFilter("main"))) {
          return true;
        }
      })
    ) {
      arrayAll.forEach((tag) => {
        if (tag.equals(new ParamFilter("main"))) {
          tag.values = resultsMain;
          find = true;
        }
      });
      if (!find) {
        arrayAll.unshift(new ParamFilter("main", resultsMain));
      }
      const arrayAllfilter = [];
      for (let elt of arrayAll) {
        arrayAllfilter.push(elt.values);
        return arrayAllfilter;
      }
      const result = globalFunctions.intersect(arrayAllfilter);
      updateRecipe(result);
      return;
    }
  }
  updateRecipe(resultsMain);
};

export const unselectedTheSearch = () => {
  if (arrayAll.length > 0) {
    const i = arrayAll.findIndex((item) =>
      item.equals(new ParamFilter("main", resultsMain))
    );
    if (i === 0) {
      console.log(arrayAll);
      arrayAll.splice(0, 1);
      console.log(arrayAll);
      const r = arrayAll.map((elt) => elt.values);
      console.log(r);
      const resultats = globalFunctions.intersect(r);
      console.log(resultats);
      updateRecipe(resultats);
      error.style.display = "none";
    }
  } else {
    updateRecipe(variables.recettes);
    error.style.display = "none";
  }
};

const getSearchTerm = (input) => {
  const value = input.value.trim().toLowerCase();
  console.log(value);
  return value;
};

// construction d'un tableau en fonction de la valeur tapée dans le champ principal
export const filterRecipe = (value) => {
  let i = 0;
  while (i < recipeTextArray.length) {
    if (recipeTextArray[i].name.includes(value)) {
      resultsMain.push(recipeTextArray[i].recipe);
    }
    i++;
  }
  return resultsMain;
}  

// update des recettes en fonction de la valeur tapée dans le champ
const updateRecipe = (fn) => {
  let recipe = fn;
  console.log(recipe);

  globalFunctions.display(recipe);

  if (recipe.length === 0) {
    error.style.display = "block";
  }
};

const filterTag = (datas, value) => {
  let array = datas.filter((elt) => elt.name.toLowerCase().includes(value));
  console.log(array);

  const recipeResult = array.map((item) => item.recipe);
  arrayAll.push(new ParamFilter(value, recipeResult));
  console.log(arrayAll);

  const resultats = globalFunctions.intersect(
    arrayAll.map((item) => item.values)
  );
  console.log(resultats);

  console.log(resultats);
  return resultats;
};

const displayTagRecipe = (datas, value) => {
  const result = filterTag(datas, value);
  if (result.length > 0) {
    updateRecipe(result);
  } else {
    updateRecipe(result);
  }
}
