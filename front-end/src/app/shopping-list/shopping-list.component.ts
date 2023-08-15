import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent {
  // Example JSON for testing purposes - just need to replace with JSON data from database
  items:any = [
    { Name: 'Digestives', Amount: '400g', Category: 'Biscuits' },
    { Name: 'Cream cheese', Amount: '200g', Category: 'Dairy' },
    { Name: 'Strawberries', Amount: '400g', Category: 'Fruit' },
    { Name: 'Vanilla Extract', Amount: '10 cups', Category: 'Baking' },
  ];
  _object = Object;
}