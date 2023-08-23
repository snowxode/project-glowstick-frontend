import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{
  // Hardcoded data for testing
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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/recipes').subscribe(res => {
      console.log(res.message);
    });
  }
}

