import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { CartComponent } from './cart/cart.component';
import { DescriptionComponent } from './product-catalog/description/description.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
 
  { path: 'login', component: LoginComponent },
  
  { path: 'register', component: RegisterComponent },

  { path: '', component: ProductCatalogComponent },

  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent},

  { path: 'description/:id', component: DescriptionComponent},

  { path: 'description', component: DescriptionComponent},
   
  {path : 'user', component: UserComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
