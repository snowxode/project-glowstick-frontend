import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';
import { PreviousRouteService } from './url.service';
import { Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';

@Injectable()
class recipeUrlChecker {
  constructor(private router: Router, private previousRoute: PreviousRouteService) {}

  checkUrl(route: string){
    const routeList: String[] = ['/recipes/new-recipe/add-ingredients', '/recipes/new-recipe/add-method', '/recipes/new-recipe/upload'];
    console.log(routeList.includes(this.router.url), route)
    if (routeList.includes(this.previousRoute.getPreviousUrl()) && !routeList.includes("/"+route)){
      console.log('clearing session storage');
      sessionStorage.setItem('currentRecipe', '');
      return;
    }
    return;
  }
}


export const recipeGuard: CanActivateFn = (route, state) => {
  new recipeUrlChecker(inject(Router), inject(PreviousRouteService)).checkUrl(route.url.join('/'));
  return true;
};
