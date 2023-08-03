import { Component } from '@angular/core';
import 'zone.js/dist/zone'; 
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { PipeTransform, Pipe } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent {
  items:any = [
    { Name: 'Digestives', Amount: '400g', Category: 'Biscuits' },
    { Name: 'Cream cheese', Amount: '200g', Category: 'Dairy' },
    { Name: 'Strawberries', Amount: '400g', Category: 'Fruit' }
  ];
  _object = Object;
}
bootstrapApplication(ShoppingListComponent)