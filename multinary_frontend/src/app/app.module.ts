import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RecipeStartComponent } from './recipe-list/recipe-start/recipe-start.component';
import { AppRoutingModule } from './app-routing.model';
import { ProductServices } from './product.service';
import { CartComponent } from './cart/cart.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CartServices } from './cart.service';
import { NewOrderServices } from './neworder.service';
import{OrderServices} from './order.service'
import { FooterComponent } from './footer/footer.component';
import { RelatedComponent } from './related/related.component';
import { OrdersComponent } from './orders/orders.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainScreenComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegistrationComponent,
    RecipeStartComponent,
    CartComponent,
    FooterComponent,
    RelatedComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ProductServices,CartServices,NewOrderServices,OrderServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
