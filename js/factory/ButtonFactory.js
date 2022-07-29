
import { variables } from "../utils/variables.js";

export class ButtonMenuFactory {
  constructor() {
    this.ingredients = new Set();
    this.appliance = new Set();
    this.ustensils = new Set();
  }

  buildButton() {
    const listIngredients = Array.from(this.ingredients).sort();
    listIngredients.forEach((e) => {
      const elt = `<li class="dropdown-menu__item dropdown-menu__item-ingredients" title="${e}" data-filter="ingredients">${e}</li>`;
      variables.buttonIngredientsList.innerHTML += elt;
      
      return listIngredients;
    });

    const listAppliance = Array.from(this.appliance).sort();
    listAppliance.forEach((e) => {
      const elt = `<li class="dropdown-menu__item dropdown-menu__item-appliances" data-filter="appliances">${e}</li>`;
      variables.buttonApplianceList.innerHTML += elt;
      
      return listAppliance;
    });

    const listUstensils = Array.from(this.ustensils).sort();
    listUstensils.forEach((e) => {
      const elt = `<li class="dropdown-menu__item dropdown-menu__item-ustensils" data-filter="ustensils">${e}</li>`;
      variables.buttonUstensilsList.innerHTML += elt;
      
      return listUstensils;
    });
  }

  workArrayForButton(array) {
    array.forEach((recipe) => {
      this.appliance.add(recipe.appliance);
      recipe.ingredients.forEach((i) => {
        this.ingredients.add(i.ingredient);
      });
      recipe.ustensils.forEach((i) => {
        this.ustensils.add(i);
      });
    });
  }

  buttonIngredientsByValue(array, filterValue) {
    this.workArrayForButton(array);
    const listIngredients = Array.from(this.ingredients)
      .sort()
      .filter((elt) => elt.toLowerCase().includes(filterValue));
    variables.buttonIngredientsList.innerHTML = "";
    listIngredients.forEach((e) => {
      const elt = `<li class="dropdown-menu__item dropdown-menu__item-ingredients" data-filter="ingredients">${e}</li>`;
      variables.buttonIngredientsList.innerHTML += elt;
    });
  }

  buttonApplianceByValue(array, filterValue) {
    this.workArrayForButton(array);
    const listAppliance = Array.from(this.appliance)
      .sort()
      .filter((elt) => elt.toLowerCase().includes(filterValue));
    variables.buttonApplianceList.innerHTML = "";
    listAppliance.forEach((e) => {
      const elt2 = `<li class="dropdown-menu__item dropdown-menu__item-appliances" data-filter="appliances">${e}</li>`;
      variables.buttonApplianceList.innerHTML += elt2;
    });
  }

  buttonUstensilsByValue(array, filterValue) {
    this.workArrayForButton(array);
    const listUstensils = Array.from(this.ustensils)
      .sort()
      .filter((elt) => elt.toLowerCase().includes(filterValue));
    variables.buttonUstensilsList.innerHTML = "";
    listUstensils.forEach((e) => {
      const elt3 = `<li class="dropdown-menu__item dropdown-menu__item-ustensils" data-filter="ustensils">${e}</li>`;
      variables.buttonUstensilsList.innerHTML += elt3;
    });
  }
}
