import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AddIngredientsComponent } from './add-ingredients/add-ingredients.component';
import { AddMethodComponent } from './add-method/add-method.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingListComponent,
    RecipesComponent,
    UploadImageComponent,
    SignInComponent,
    AddIngredientsComponent,
    AddMethodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
