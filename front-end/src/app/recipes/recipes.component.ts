import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{
  // Temporary hardcoded data for testing
  items:any = [
    { Name: 'Digestives', },
    { Name: 'Cream cheese'},
    { Name: 'Strawberries'},
    { Name: 'Vanilla Extract' },
    { Name: 'Double Cream' },];

  _object = Object;

  constructor(private http: HttpClient, private router: Router) { }

  // TODO: make a service for this to get all of the back-end routes needed for the recipes page - Use env variable in the service
  ngOnInit() {
    this.http.get<any>('http://localhost:3000/recipes').subscribe(
      res => {
        console.log(res.message);
      },
      // If their sign in token is invalid, redirect to the sign in page
      err => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          this.router.navigate(['/sign-in']);
        }
      }
    );
  }
}

