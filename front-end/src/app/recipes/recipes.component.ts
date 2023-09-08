import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from './recipes.data'; 
import { CookieService } from 'ngx-cookie-service';
import { environment } from './../../environments/environment';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{
  recipes: Recipe[] = [];
  currentActiveRecipe: Recipe = this.recipes[0];
  constructor(private http: HttpClient, private router: Router, private _cookies: CookieService) { }

  // TODO: make a service for this to get all of the back-end routes needed for the recipes page - Use env variable in the service
  ngOnInit() {
    //@ts-ignore
    this.http.get<any>(`${environment.API_URL}recipes/?id="${this._cookies.get('userID')}"`).subscribe(
      res => {
        console.log(res);
        if(res != null){
          this.recipes = res;
        }
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

