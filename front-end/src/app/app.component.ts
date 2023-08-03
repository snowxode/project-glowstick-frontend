import { Component, OnDestroy } from '@angular/core';
import { Router,NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'front-end';

  event$ 
  recipes: boolean = false;
  home: boolean = false;
  shopList: boolean = false;
  addIngre: boolean = false;
  addMeth: boolean = false;
  upload: boolean = false;
  signIn: boolean = false;
  menu: boolean = false;
  signUp: boolean = false;

 
  constructor(private router: Router) {
    
    this.event$
      =this.router.events
          .subscribe(
            (event: NavigationEvent) => {
              if(event instanceof NavigationStart) {
                console.log(event.url);
                if (event.url == "/recipes") {
                  this.home = false;
                  this.shopList = false;
                  this.addIngre = false;
                  this.addMeth = false;
                  this.upload = false;
                  this.signIn = false;
                  this.menu = false;
                  this.signUp = false;
                  return this.recipes = true;
                } else if (event.url == "/home" || event.url == "/") {
                  this.recipes = false;
                  this.shopList = false;
                  this.addIngre = false;
                  this.addMeth = false;
                  this.upload = false;
                  this.signIn = false;
                  this.menu = false;
                  this.signUp = false;
                  return this.home = true;
                } else if (event.url == '/shopping-list') {
                  this.home = false;
                  this.recipes = false;
                  this.addIngre = false;
                  this.addMeth = false;
                  this.upload = false;
                  this.signIn = false;
                  this.menu = false;
                  this.signUp = false;
                  return this.shopList = true;
                } else if (event.url == '/add-ingredients') {
                  this.home = false;
                  this.recipes = false;
                  this.shopList = false;
                  this.addMeth = false;
                  this.upload = false;
                  this.signIn = false;
                  this.menu = false;
                  this.signUp = false;
                  return this.addIngre = true;
                } else if (event.url == '/add-method') {
                  this.home = false;
                  this.recipes = false;
                  this.shopList = false;
                  this.addIngre = false;
                  this.upload = false;
                  this.signIn = false;
                  this.menu = false;
                  this.signUp = false;
                  return this.addMeth = true;
                } else if (event.url == '/upload') {
                  this.home = false;
                  this.recipes = false;
                  this.shopList = false;
                  this.addIngre = false;
                  this.addMeth = false;
                  this.signIn = false;
                  this.menu = false;
                  this.signUp = false;
                  return this.upload = true;
                } else if (event.url == '/sign-in') {
                  this.home = false;
                  this.recipes = false;
                  this.shopList = false;
                  this.addIngre = false;
                  this.addMeth = false;
                  this.upload = false;
                  this.menu = false;
                  this.signUp = false;
                  return this.signIn = true;
                } else if (event.url == '/menu') {
                  this.home = false;
                  this.recipes = false;
                  this.shopList = false;
                  this.addIngre = false;
                  this.addMeth = false;
                  this.signIn = false;
                  this.upload = false;
                  this.signUp = false;
                  return this.menu = true;
                } else if (event.url == '/sign-up') {
                  this.home = false;
                  this.recipes = false;
                  this.shopList = false;
                  this.addIngre = false;
                  this.addMeth = false;
                  this.upload = false;
                  this.menu = false;
                  this.signIn = false
                  return this.signUp = true;
                }
              }
              return
            });
  }
 
  ngOnDestroy() {
    this.event$.unsubscribe();
  }
}

