import { Component } from '@angular/core';
// import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  items:any = [
    { Name: 'Digestives', },
    { Name: 'Cream cheese'},
    { Name: 'Strawberries'},
    { Name: 'Vanilla Extract' },
    { Name: 'Vanilla Extract' },
    { Name: 'Vanilla Extract' },
    { Name: 'Vanilla Extract' },
    { Name: 'Vanilla Extract' },
    { Name: 'Vanilla Extract' },
    { Name: 'Vanilla Extract' },
    { Name: 'Vanilla Extract' },
    { Name: 'Vanilla Extract' },
    { Name: 'Vanilla Extract' },
  ];
  _object = Object;
}
// bootstrapApplication(RecipesComponent);
