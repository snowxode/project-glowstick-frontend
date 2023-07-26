import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AddIngredientsComponent } from './add-ingredients/add-ingredients.component';
import { AddMethodComponent } from './add-method/add-method.component';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'home', component: TestComponent },
  { path: 'shopping-list', component: TestComponent },
  { path: 'recipes', component: TestComponent },
  { path: 'upload', component: TestComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'add-ingredients', component: TestComponent },
  { path: 'add-method', component: TestComponent },
  { path: 'menu', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
