import {
  ingredientsArray,
  appareils,
  ustensiles,
  loadData,
} from "./utils/data.js";
//import { filter } from './Filter/principalField.js'
import {} from "./dropdown/dropdown.js";
import { variables } from "./utils/variables.js";
import {
  arrayAll,
  filterRecipe,
  submitTheSearch,
  submit,
  submitOnClick,
  resultsMain,
  unselectedTag,
  unselectedTheSearch,
  inputTagSelected,
} from "./Filter/principalField.js";
import { globalFunctions } from "./utils/globalFunctions.js";
import { Tags } from "./Tags/tag.js";
import { ParamFilter } from "./utils/ParamFilter.js";

const initApp = () => {
  loadData();
  globalFunctions.display(variables.recettes);
  variables.formControl.focus();//focus champ principal

  variables.formControl.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.target.value.length > 2) { 
        submitTheSearch();
        
    }else{
      unselectedTheSearch()
    }
  });

  variables.formControl.addEventListener("mouseout", (e) => {
    e.preventDefault();
    
    let find = false
        if (e.target.value.length > 2) {

          arrayAll.forEach(tag => {
            if(tag.equals(new ParamFilter('main'))){
              tag.values = resultsMain
              find = true
            }
          })
          if(!find){
            arrayAll.unshift(new ParamFilter('main', resultsMain))
          }
          console.log(arrayAll);
          
          submit()
          
    }
    
  });
  
  submitOnClick()

  inputTagSelected()

  variables.containerTag.addEventListener('click', (e) => {
    e.stopPropagation()
    unselectedTag(e)
  })

}
initApp();
