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

let tagArray = [AllIds]
let tagArrayAll = []
// construction d'un tableau d'ids et de l'objet correspondant
const makeIdArray = () => {
 let value = processTheSearch()

  const array = recipeTextArray.filter(elt => elt.name.includes(value))
  console.log(array);
  let recipesArray = []
  
       let filterElementId = []
       
          for(let el of array){
            let newRecipeArray = variables.recettes.filter(elt => elt.id === el.id)
          console.log(newRecipeArray);
          //recipesArray.push(newRecipeArray)
          filterElementId.push(el.id)
        }  
         console.log(tagArrayAll);
         
        
          tagArray.push(filterElementId)
          console.log(tagArray);
          const newArr = Array.from(new Set(tagArray.map(JSON.stringify)), JSON.parse)
          console.log(newArr.length);
          if(newArr.length === 3){
            newArr.splice(1,1)
          }
          console.log(newArr);
          let intersection = globalFunctions.intersect(newArr)
          console.log(intersection);
          
          recipesArray = globalFunctions.newIntersectionObj(intersection, recipesArray)
          console.log(recipesArray);
          console.log({tagArray, recipesArray});
        return {newArr, recipesArray}      
}

// display par défaut des 50 recettes
const displayDefault = () => {
  globalFunctions.display(variables.recettes)
}


// update des recettes en fonction de la valeur tapée dans le champ
const updateRecipe = (fn) => {
  let recipe = fn
  console.log(recipe);
  let recipeObj = recipe.recipesArray
  console.log(recipeObj);
  globalFunctions.display(recipeObj)
}





//recherche de la valeur de la liste cliquée
//Doit nous renvoyer un tableau de recette
export const filterTag = (datas, value) => {
  //1 Récupérer les id des datas qui correcpondent à value
  // ces ids me servent de valeurs d'entrée dans une nouvelles fonction
  
 let array = datas.filter(elt => elt.name.toLowerCase().includes(value));
 console.log(array);
 let recipesArray = []
 
 let filterElementId = []
 
    for(let el of array){
      console.log(el.id);
    filterElementId.push(el.id)
      
  }  
  filterElementId = filterElementId.flat()
    console.log(filterElementId);
    
  tagArray.push(filterElementId)
  console.log(tagArray);
  const newArr = Array.from(new Set(tagArray.map(JSON.stringify)), JSON.parse)
  console.log(newArr);
  if(newArr.length > 3){
    newArr.splice(1,1)
  }
  console.log(newArr);
  tagArrayAll = globalFunctions.intersect(newArr)
  console.log(tagArrayAll);
  recipesArray = globalFunctions.newIntersectionObj(tagArrayAll, recipesArray)
  console.log(recipesArray);
  return{newArr, recipesArray}
}




