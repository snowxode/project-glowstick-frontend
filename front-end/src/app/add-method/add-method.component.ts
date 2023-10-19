import { Component } from '@angular/core';

@Component({
  selector: 'app-add-method',
  templateUrl: './add-method.component.html',
  styleUrls: ['./add-method.component.css']
})
export class AddMethodComponent{
  instructionText: string | undefined;

  clear() {
    this.instructionText = '';
  }

  updateRecipe(method: string){
    let currentRecipe = sessionStorage.getItem('currentRecipe');
    if (currentRecipe !== null) {
      const recipe = JSON.parse(currentRecipe);
      if (typeof recipe === 'object' && recipe !== null) {
        recipe.method = method;
        sessionStorage.setItem('currentRecipe', JSON.stringify(recipe));
      }
    }
  }

}
