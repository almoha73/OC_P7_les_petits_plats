import {recipeTextArray, ingredientsArray, appareils, ustensiles, AllIds} from '../utils/data.js'
import { Tags} from '../Tags/tag.js'
import {} from '../index.js'
import { variables}  from '../utils/variables.js'
import { globalFunctions } from '../utils/globalFunctions.js'


  
console.log(recipeTextArray);
console.log(variables.formControl);

const listes = [variables.buttonIngredientsList, variables.buttonApplianceList, variables.buttonUstensilsList]
console.log(variables.buttonIngredientsList, variables.buttonApplianceList, variables.buttonUstensilsList);
///
export const submitOnClick = () => {
  listes.forEach(elt => elt.addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target.tagName === 'LI'){
        const value = e.target.innerHTML.toLowerCase()
        console.log(value);
        const node = e.target.parentElement
        //console.log(node);
        const id = node.getAttribute('id')
        console.log(id);

        switch(id){
            case 'ingredients':{
                displayTagRecipe(ingredientsArray, value)
                const tag = new Tags(value, 'ingredients')
                tag.buildTag()
                break
            }
            case 'appliances':{
                displayTagRecipe(appareils, value)
                const tag = new Tags(value, 'appliances')
                tag.buildTag()
                break
            }
            case 'ustensils':{
                displayTagRecipe(ustensiles, value)
                const tag = new Tags(value, 'ustensils')
                tag.buildTag()
                break
            }
            
        }
    }
   
}))
}



export const submitTheSearch = () => {
  setSearchFocus()
  updateRecipe(makeIdArray())
    
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
        console.log(arrayAll[arrayAll.length - 1]);
        return arrayAll[arrayAll.length - 1]    
}

// display par défaut des 50 recettes
const displayDefault = () => {
  globalFunctions.display(variables.recettes)
}

// update des recettes en fonction de la valeur tapée dans le champ
const updateRecipe = (fn) => {
  let recipe = fn
  console.log(recipe);
 
 globalFunctions.display(recipe)
}



export const filterTag = (datas, value) => {
 
  
  //arrayAll = [arrayAll[arrayAll.length - 1]]
  
 let array = datas.filter(elt => elt.name.toLowerCase().includes(value));
 console.log(array);
 
 let recipesArray = []
 for(let el of array){
 recipesArray.push(el.recipe)
  
} 
 
 console.log(recipesArray);//stoque les tableaux d'objets cliqués successifs
arrayAll.push(recipesArray)
  let array1 = globalFunctions.intersect(arrayAll)
  console.log(array1);
 return array1 // ici je voudrais pouvoir générer l'intersection pour avoir le nouvel affichage   
 

}




