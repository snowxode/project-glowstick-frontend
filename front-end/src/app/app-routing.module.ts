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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'upload', component: UploadImageComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'add-ingredients', component: AddIngredientsComponent },
  { path: 'add-method', component: AddMethodComponent },
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
