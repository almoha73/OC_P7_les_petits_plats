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
  setSearchFocus,
  submitOnClick,
} from "./Filter/principalField.js";
import { globalFunctions } from "./utils/globalFunctions.js";
import { Tags } from "./Tags/tag.js";

const initApp = () => {
  loadData();
  globalFunctions.display(variables.recettes);
  setSearchFocus();

  variables.formControl.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.target.value.length > 2) {
      submitTheSearch();
    }
  });

  variables.formControl.addEventListener("focusout", (e) => {
    e.preventDefault();
    const v = e.target.value.length;
    if (e.target.value.length > 2) {
      if (!arrayAll.some((obj) => obj.key === "principal")) {
        //arrayAll.push(filterRecipe(e.target.value))
        arrayAll.push({ key: "principal", data: filterRecipe(v) });
      }
    }
  });

  submitOnClick();
};
initApp();
