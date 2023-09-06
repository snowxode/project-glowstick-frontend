import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', component: TestComponent },
  { path: 'shopping-list', component: TestComponent, canActivate: [AuthGuard] },
  { path: 'recipes', component: TestComponent, canActivate: [AuthGuard] },
  { path: 'recipes/new-recipe/upload', component: TestComponent, canActivate: [AuthGuard] },
  { path: 'sign-in', component: TestComponent },
  { path: 'recipes/new-recipe/add-ingredients', component: TestComponent, canActivate: [AuthGuard] },
  { path: 'recipes/new-recipe/add-method', component: TestComponent, canActivate: [AuthGuard] },
  { path: 'menu', component: TestComponent },
  { path: '', component: TestComponent },
  { path: 'sign-up', component: TestComponent },
  { path: 'privacy-policy', component: TestComponent },
  { path: 'terms-and-conditions', component: TestComponent },
  { path: 'contact-us', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
