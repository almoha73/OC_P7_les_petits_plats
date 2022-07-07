import { ingredientsArray, appareils, ustensiles, loadData} from "./utils/data.js";
//import { filter } from './Filter/principalField.js'
import {} from "./dropdown/dropdown.js";
import { variables } from "./utils/variables.js";
import { submitTheSearch, setSearchFocus, displayTagRecipe} from "./Filter/principalField.js";
import { globalFunctions } from "./utils/globalFunctions.js";
import { Tags } from "./Tags/tag.js";

const listes = [variables.buttonIngredientsList, variables.buttonApplianceList, variables.buttonUstensilsList]
console.log(variables.buttonIngredientsList, variables.buttonApplianceList, variables.buttonUstensilsList);

const initApp = () => {
    loadData()
    globalFunctions.display(variables.recettes)
    setSearchFocus()
    variables.formControl.addEventListener("keyup", submitTheSearch)
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
                    //filter(ingredientsArray, value)
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

initApp()