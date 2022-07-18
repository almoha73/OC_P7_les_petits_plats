import {
  recipeTextArray,
  ingredientsArray,
  appareils,
  ustensiles,
  AllIds,
} from "../utils/data.js";
import { Tags } from "../Tags/tag.js";
import {} from "../index.js";
import { variables } from "../utils/variables.js";
import { globalFunctions } from "../utils/globalFunctions.js";
import { ParamFilter } from "../utils/ParamFilter.js";

export let resultsMain = []
export let arrayAll = [];

const listes = [
  variables.buttonIngredientsList,
  variables.buttonApplianceList,
  variables.buttonUstensilsList,
];
console.log(
  variables.buttonIngredientsList,
  variables.buttonApplianceList,
  variables.buttonUstensilsList
);


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


export const unselectedTag=(event)=>{
  const target = event.target
  console.log(target);
  if(target.tagName === 'LI' || target.tagName === 'li'){
    const val = target.innerHTML.toLowerCase()
    target.remove()
    const i = arrayAll.findIndex(item => item.equals(new ParamFilter(val)))
    arrayAll.splice(i, 1)
    if(arrayAll.length > 0){
      updateRecipe(globalFunctions.intersect(arrayAll.map(elt => elt.values)))
    }else{
      updateRecipe(variables.recettes);
    }
}
}

export const submitTheSearch = () => {
  let value = getSearchTerm();
  resultsMain=filterRecipe(value).map(elt => elt.recipe);
  console.log(resultsMain);
 console.log(arrayAll);
 globalFunctions.display(resultsMain)
};

export const submit = () => {
  let value = getSearchTerm();
  resultsMain=filterRecipe(value).map(elt => elt.recipe);
  console.log(resultsMain);
 console.log(arrayAll);
 const r = arrayAll.map(elt => elt.values)
 console.log(r);
 const resultats = globalFunctions.intersect(r);
 console.log(resultats);
 globalFunctions.display(resultats)

}

export const unselectedTheSearch = () => {
  if(arrayAll.length > 0){
    
    const i = arrayAll.findIndex(item => item.equals(new ParamFilter('main', resultsMain)))
    console.log(i);
    if(i === 0){
      console.log(arrayAll);
    arrayAll.splice(0, 1)
    console.log(arrayAll);
    const r = arrayAll.map(elt => elt.values)
    console.log(r);
    const resultats = globalFunctions.intersect(r);
    console.log(resultats);
    globalFunctions.display(resultats)
    }else{
      globalFunctions.display(variables.recettes)
    }
      
  
  }else{
    globalFunctions.display(variables.recettes)
  }
  
   
    
}

export const displayTagRecipe = (datas, value) => {
  updateRecipe(filterTag(datas, value));
};



const getSearchTerm = () => {
  const value = variables.formControl.value.trim().toLowerCase();
  console.log(value);
  return value;
};



// construction d'un tableau en fonction de la valeur tapée dans le champ principal
export const filterRecipe = (value) => {
  
  if (value) {
    return recipeTextArray.filter((elt) => elt.name.includes(value));
  } else {
    return [];
  }

};

// display par défaut des 50 recettes
const displayDefault = () => {
  globalFunctions.display(variables.recettes);
};

// update des recettes en fonction de la valeur tapée dans le champ
const updateRecipe = (fn) => {
  let recipe = fn;
  //console.log(recipe);

  globalFunctions.display(recipe);
};

export const filterTag = (datas, value) => {
  let array = datas.filter((elt) => elt.name.toLowerCase().includes(value));
  console.log(array);

  const recipeResult = array.map(item => item.recipe)
  arrayAll.push(new ParamFilter(value, recipeResult))
 console.log(arrayAll);
  
 const resultats = globalFunctions.intersect(arrayAll.map(item => item.values));
console.log(resultats);
 return resultats

  
};
