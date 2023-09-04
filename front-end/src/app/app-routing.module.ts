import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'home', component: TestComponent },
  { path: 'shopping-list', component: TestComponent },
  { path: 'recipes', component: TestComponent },
  { path: 'recipes/new-recipe/upload', component: TestComponent },
  { path: 'sign-in', component: TestComponent },
  { path: 'recipes/new-recipe/add-ingredients', component: TestComponent },
  { path: 'recipes/new-recipe/add-method', component: TestComponent },
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
