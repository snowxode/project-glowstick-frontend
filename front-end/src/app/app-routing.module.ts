import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TsAndCsComponent } from './ts-and-cs/ts-and-cs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MenuComponent } from './menu/menu.component';
import { AddMethodComponent } from './add-method/add-method.component';
import { AddIngredientsComponent } from './add-ingredients/add-ingredients.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { recipeGuard } from './recipe.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [recipeGuard]},
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard, recipeGuard] },

  // TODO - Make the recipes routes children of the recipes route
  { path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard, recipeGuard] },
  { path: 'recipes/new-recipe/upload', component: UploadImageComponent, canActivate: [AuthGuard, recipeGuard] },
  { path: 'recipes/new-recipe/add-ingredients', component: AddIngredientsComponent, canActivate: [AuthGuard, recipeGuard] },
  { path: 'recipes/new-recipe/add-method', component: AddMethodComponent, canActivate: [AuthGuard, recipeGuard]},

  { path: 'menu', component: MenuComponent, canActivate: [recipeGuard] },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, canActivate: [recipeGuard] },
  { path: 'sign-up', component: SignUpComponent, canActivate: [recipeGuard] },
  { path: 'privacy-policy', component: PrivacyPolicyComponent, canActivate: [recipeGuard] },
  { path: 'terms-and-conditions', component: TsAndCsComponent, canActivate: [recipeGuard] },
  { path: 'contact-us', component: ContactUsComponent, canActivate: [recipeGuard] },
  { path: '**', component: PageNotFoundComponent, canActivate: [recipeGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
