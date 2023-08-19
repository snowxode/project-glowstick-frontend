import { Component } from '@angular/core';
@Component({
  selector: 'app-add-ingredients',
  templateUrl: './add-ingredients.component.html',
  styleUrls: ['./add-ingredients.component.css']
})
export class AddIngredientsComponent {
  allItems: any = [];

  get items() {
    return this.allItems;
  }

  addItem(name: string, amount: string) {
    this.allItems.unshift({
      name,
      amount
    });
  }

  clearAll() {
    this.allItems = [];
  }
}
