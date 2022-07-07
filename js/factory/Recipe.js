//import { recipes } from "../data/recipes.js";
import { variables } from "../utils/variables.js";

export class Recipe {
  constructor(data) {
    this.id = data.id;
    this.appliance = data.appliance;
    this.ustensiles = data.ustensils;
    this.name = data.name;
    this.time = data.time;
    this.description = data.description;
    this.ingredients = data.ingredients;
    this.quantity = data.quantity;
    this.unit = data.unit;
    this.newIngredient = [];
    this.undefinedManage();
  }
  buildCard() {
    
    variables.container.innerHTML += `
        <div id="${this.id}" data-appliance="${
      this.appliance
    }" data-ustensiles="${this.ustensiles}" class="card">
        <img src="https://source.unsplash.com/random/380x178" class="card-img-top" alt="...">
      
        <div class="cardBody-first">
            <div class="card-body-first">
                <h5 class="card-title" title="${this.name}">${this.name}</h5>
                <div class="time-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <path fill="#000" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm.5-13H9v6l5.2 3.2.8-1.3-4.5-2.7V5Z"/>
                </svg>
                    <span class="time">${this.time} minutes</span>
                </div>
            </div>
        </div>
        <div class="cardBody-second">
            <div class="card-body-second">
                <div class="card-text-first">
                    ${this.newIngredient.join("")}
                </div>
                <div class="card-text-second">
                    <p>${this.description}</p>
                </div>
            </div>
        </div>
      </div>
      `;
  }

  undefinedManage() {
    for (let i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i].quantity === undefined) {
        this.newIngredient.push(`<p>${this.ingredients[i].ingredient}</p>`);
      } else if (this.ingredients[i].unit === undefined) {
        this.newIngredient.push(
          `<p>${this.ingredients[i].ingredient}: ${this.ingredients[i].quantity}</p>`
        );
      } else {
        this.newIngredient.push(
          `<p>${this.ingredients[i].ingredient}: ${this.ingredients[i].quantity} ${this.ingredients[i].unit}</p>`
        );
      }
    }
  }
}


