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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] },
  { path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard] },
  { path: 'recipes/new-recipe/upload', component: UploadImageComponent, canActivate: [AuthGuard] },
  { path: 'recipes/new-recipe/add-ingredients', component: AddIngredientsComponent, canActivate: [AuthGuard] },
  { path: 'recipes/new-recipe/add-method', component: AddMethodComponent, canActivate: [AuthGuard] },
  { path: 'menu', component: MenuComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-and-conditions', component: TsAndCsComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
