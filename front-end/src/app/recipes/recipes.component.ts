import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from './recipes.data'; 
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{
  recipes: Recipe[] = [
    {title: "Dummy 1",
      ingredients: [{name: "Vanilla extract", amount: 7, measurement: "cup(s)"}, {name: "Vanilla extract", amount: 8, measurement: "cup(s)"}],
      method: "Mix, then drink.",
      image: "https://google.com" // URL
    },
    {title: "Dummy 2",
      ingredients: [{name: "Vanilla extract", amount: 12, measurement: "gram(s)"}, {name: "Vanilla extract", amount: 15, measurement: "teaspoon(s)"}],
      method: "snort",
      image: "https://google.com" // URL
    }];
  
    currentActiveRecipe: Recipe = this.recipes[0];
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
  selectRecipe(recipe: Recipe){
    this.currentActiveRecipe = recipe;
    return
  }
}

