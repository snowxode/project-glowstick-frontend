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
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TsAndCsComponent } from './ts-and-cs/ts-and-cs.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ModalComponent } from './modal/modal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PreviousRouteService } from './url.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingListComponent,
    RecipesComponent,
    UploadImageComponent,
    SignInComponent,
    AddIngredientsComponent,
    AddMethodComponent,
    MenuComponent,
    NavbarComponent,
    BodyContainerComponent,
    FooterComponent,
    TestComponent,
    SignUpComponent,
    PrivacyPolicyComponent,
    TsAndCsComponent,
    ContactUsComponent,
    ModalComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }, PreviousRouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
