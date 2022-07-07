//import {} from "../index.js";
//import { recipes } from "../data/recipes.js";
import { variables } from "../utils/variables.js";

export class ButtonMenuFactory {
  constructor() {
    this.ingredients = new Set();
    //console.log(this.ingredients);
    this.appliance = new Set();
    this.ustensils = new Set();
    
  }

  buildArrayButton(){
    const listIngredients = Array.from(this.ingredients).sort();
    const listAppliance = Array.from(this.appliance).sort();
    const listUstensils = Array.from(this.ustensils).sort();

    return [listIngredients, listAppliance, listUstensils]
  }

  buildButton() {
    
    //console.log(this.ingredientsArray);
    const listIngredients = Array.from(this.ingredients).sort();
    //console.log(listIngredients);
    listIngredients.forEach((e) => {
      const elt = `<li class="dropdown-menu__item dropdown-menu__item-ingredients" data-filter="ingredients">${e}</li>`;
      variables.buttonIngredientsList.innerHTML += elt;
    });
    
    const listAppliance = Array.from(this.appliance).sort();
    //console.log(listAppliance);
    listAppliance.forEach((e) => {
      const elt = `<li class="dropdown-menu__item dropdown-menu__item-appliances" data-filter="appliances">${e}</li>`;
    variables.buttonApplianceList.innerHTML += elt;
    });

    //console.log(this.ustensilsArray);
    const listUstensils = Array.from(this.ustensils).sort();
    //console.log(listUstensils);
    listUstensils.forEach((e) => {
      const elt = `<li class="dropdown-menu__item dropdown-menu__item-ustensils" data-filter="ustensils">${e}</li>`;
    variables.buttonUstensilsList.innerHTML += elt;
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

  buttonIngredientsByValue(array, filterValue){
    this.workArrayForButton(array)
    const listIngredients = Array.from(this.ingredients).sort().filter(elt => elt.toLowerCase().includes(filterValue));
    //console.log(listIngredients);
    listIngredients.forEach((e) => {
      const elt = `<li class="dropdown-menu__item" data-filter="ingredients">${e}</li>`;
      variables.buttonIngredientsList.innerHTML += elt;
    });
  }
  buttonApplianceByValue(array, filterValue){
    this.workArrayForButton(array)
    const listAppliance = Array.from(this.appliance).sort().filter(elt => elt.toLowerCase().includes(filterValue));
    //console.log(listAppliance);
    listAppliance.forEach((e) => {
    const elt2 = `<li class="dropdown-menu__item" data-filter="appliances">${e}</li>`;
    variables.buttonApplianceList.innerHTML += elt2;
    });
  }
   
  buttonUstensilsByValue(array, filterValue){
    this.workArrayForButton(array)
    const listUstensils = Array.from(this.ustensils).sort().filter(elt => elt.toLowerCase().includes(filterValue));
    //console.log(listUstensils);
    listUstensils.forEach((e) => {
    const elt3 = `<li class="dropdown-menu__item" data-filter="ustensils">${e}</li>`;
    variables.buttonUstensilsList.innerHTML += elt3;
    });
  }  
    
}

   


  



