import { Component } from '@angular/core';

import { ModalService } from '../_services/modal.service';
import { Recipe } from '../recipes/recipes.data';
@Component({
  selector: 'app-add-ingredients',
  templateUrl: './add-ingredients.component.html',
  styleUrls: ['./add-ingredients.component.css']
})
export class AddIngredientsComponent {
  currentRecipe: Recipe = {name : 'Untitled', ingredients: [], method: ''};
  allItems: any = [];
  validationError: boolean = false;

  
  constructor(protected modalService: ModalService) { }

  get items() {
    return this.allItems;
  }

  sendToChild(name: string){
    this.currentRecipe.name = name;
    this.currentRecipe.ingredients = this.allItems;
    sessionStorage.setItem('currentRecipe', JSON.stringify(this.currentRecipe));
  }

  addItem(name: string, amount: string) {
    if (name == '' || amount == '') {
      this.errorMessage();
    } else {
      this.resetMessage();
        this.allItems.unshift({
          name,
          amount
        });
    }
    
  }

  clearAll() {
    this.allItems = [];
  }

  errorMessage() {
    return this.validationError = true;
  }

  resetMessage() {
    return this.validationError = false;
  }
}
