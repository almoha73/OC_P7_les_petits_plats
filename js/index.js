import { ingredientsArray, appareils, ustensiles, loadData} from "./utils/data.js";
//import { filter } from './Filter/principalField.js'
import {} from "./dropdown/dropdown.js";
import { variables } from "./utils/variables.js";
import { submitTheSearch, setSearchFocus, submitOnClick} from "./Filter/principalField.js";
import { globalFunctions } from "./utils/globalFunctions.js";
import { Tags } from "./Tags/tag.js";

const listes = [variables.buttonIngredientsList, variables.buttonApplianceList, variables.buttonUstensilsList]
console.log(variables.buttonIngredientsList, variables.buttonApplianceList, variables.buttonUstensilsList);

const initApp = () => {
    loadData()
    globalFunctions.display(variables.recettes)
    setSearchFocus()

    variables.formControl.addEventListener('keyup', (e) => {
        e.preventDefault()
        if(e.target.value.length > 2){
            submitTheSearch()
            
        }
        
    })

    submitOnClick()
}
initApp()