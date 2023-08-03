import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

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
    { Name: 'Strawberries', Amount: '400g', Category: 'Fruit' }
  ];
  _object = Object;
}
// I don't know if this is needed or what it does just yet - will test
bootstrapApplication(ShoppingListComponent); 