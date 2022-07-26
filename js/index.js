import { loadData } from "./utils/data.js";
import {} from "./dropdown/dropdown.js";
import { variables } from "./utils/variables.js";
import {
  arrayAll,
  submitTheSearch,
  submitOnClick,
  resultsMain,
  unselectedTag,
  unselectedTheSearch,
  inputTagSelected,
} from "./Filter/filterFields.js";
import { globalFunctions } from "./utils/globalFunctions.js";
import { ParamFilter } from "./utils/ParamFilter.js";

///Initialisation de l'application
const initApp = () => {
  loadData();
  globalFunctions.display(variables.recettes);
  variables.formControl.focus(); //focus champ principal

  variables.formControl.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.target.value.length > 2) {
      submitTheSearch();
    } else {
      unselectedTheSearch();
    }
  });

  variables.formControl.addEventListener("focusout", (e) => {
    e.preventDefault();
    let find = false;
    if (e.target.value.length > 2) {
      arrayAll.forEach((tag) => {
        if (tag.equals(new ParamFilter("main"))) {
          tag.values = resultsMain;
          find = true;
        }
      });

      if (!find) {
        arrayAll.unshift(new ParamFilter("main", resultsMain));
      }
    }
  });
  submitOnClick();
  inputTagSelected();

  variables.containerTag.addEventListener("click", (e) => {
    e.stopPropagation();
    unselectedTag(e);
  });
};
initApp();
