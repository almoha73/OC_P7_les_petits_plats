import { Recipe } from "../factory/Recipe.js";
import { ButtonMenuFactory } from "../factory/ButtonFactory.js";
import { variables } from "./variables.js";


export const globalFunctions = {
  recipesPreview(array) {
    variables.container.innerHTML = "";
    array.forEach((recipe) => {
      const recipeDisplay = new Recipe(recipe);
      recipeDisplay.buildCard();
    });
    
  },


  buttonListPreview(array) {
    const buttonMenuFactory = new ButtonMenuFactory();
    buttonMenuFactory.workArrayForButton(array);
     buttonMenuFactory.buildButton()
    
  },

  buttonIngredientListPreview(array, filterValue){
    const buttonMenuFactory = new ButtonMenuFactory();
    buttonMenuFactory.buttonIngredientsByValue(array,filterValue)
  },
  buttonApplianceListPreview(array, filterValue){
    const buttonMenuFactory = new ButtonMenuFactory();
    buttonMenuFactory.buttonApplianceByValue(array,filterValue)
  },
  buttonUstensilsListPreview(array, filterValue){
    const buttonMenuFactory = new ButtonMenuFactory();
    buttonMenuFactory.buttonUstensilsByValue(array,filterValue)
  },
  buttonReset() {
    variables.buttonUstensilsList.innerHTML = "";
    variables.buttonIngredientsList.innerHTML = "";
    variables.buttonApplianceList.innerHTML = "";
  },

  

  intersect(tabs){
    if(tabs && tabs.length > 0){    
      const results = tabs.reduce((accumulateur, currentTab)=>{
          return accumulateur.filter((e) => {
            return currentTab.some((r) => r.id === e.id)
          })
      },tabs[0])
      return results
      
    }else{
      return variables.recettes
    }
  },

  display(array){
        variables.container.innerHTML = "";
        globalFunctions.recipesPreview(array);
        globalFunctions.buttonReset();
        globalFunctions.buttonListPreview(array);
  },

  
};
