import {recipeTextArray, ingredientsArray, appareils, ustensiles, AllIds} from '../utils/data.js'
import { Tags} from '../Tags/tag.js'
import {} from '../index.js'
import { variables}  from '../utils/variables.js'
import { globalFunctions } from '../utils/globalFunctions.js'


  
console.log(recipeTextArray);
console.log(variables.formControl);


///
export const submitTheSearch = (e) => {
  e.preventDefault()

  setSearchFocus()
  if(e.target.value.length > 2){
    updateRecipe(makeIdArray()) 
  }
  
  
}

export const displayTagRecipe = (datas, value) => {
  
  updateRecipe(filterTag(datas, value))
  
}

// focus dans le champ principal
export const setSearchFocus = () => {
  variables.formControl.focus()
}

// recherche de la valeur tapée
const processTheSearch = () => {
  let searchTerm = getSearchTerm()
  
 return searchTerm
}

const getSearchTerm = () => {
  const value = variables.formControl.value.trim().toLowerCase()
  console.log(value);
  return value
}

let arrayAll = []

// construction d'un tableau d'ids et de l'objet correspondant
const makeIdArray = () => {
 let value = processTheSearch()

  const array = recipeTextArray.filter(elt => elt.name.includes(value))
  console.log(array);
  let recipesArray = []
   
          for(let el of array){
          recipesArray.push(el.recipe)
        }  
         console.log(recipesArray);
        arrayAll.push(recipesArray) 
        console.log(arrayAll);
        return arrayAll[0]      
}

// display par défaut des 50 recettes
const displayDefault = () => {
  globalFunctions.display(variables.recettes)
}

// update des recettes en fonction de la valeur tapée dans le champ
const updateRecipe = (fn) => {
  let recipe = fn
  console.log(recipe);
 let dupplicate = globalFunctions.duplicateRemove(recipe)
 console.log(dupplicate);
 globalFunctions.display(dupplicate)
}


console.log(ingredientsArray);
//recherche de la valeur de la liste cliquée
//Doit nous renvoyer un tableau de recette
export const filterTag = (datas, value) => {
 
  
 let array = datas.filter(elt => elt.name.toLowerCase().includes(value));
 console.log(array);
 let recipesArray = []
 
 for(let el of array){
  recipesArray.push(el.recipe)
  
} 
 console.log(recipesArray);
 arrayAll.push(recipesArray) 
 console.log(arrayAll);//stoque les tableaux d'objets cliqués successifs
return recipesArray // ici je voudrais pouvoir générer l'intersection pour avoir le nouvel affichage   
 

}




