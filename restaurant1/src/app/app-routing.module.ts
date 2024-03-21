import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth.guard';
import { AboutUsComponent } from './about-us/about-us.component';
import { LogoutComponent } from './logout/logout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowAllProductsComponent } from './show-all-products/show-all-products.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MainCourseComponent } from './main-course/main-course.component';
import { BiryanisComponent } from './biryanis/biryanis.component';
import { ThalisComponent } from './thalis/thalis.component';
import { DessertsComponent } from './desserts/desserts.component';
import { ClientsComponent } from './clients/clients.component';
import { CateringComponent } from './catering/catering.component';
import { StartersComponent } from './starters/starters.component';
import { CurbsideComponent } from './curbside/curbside.component';


const routes: Routes = [
  {path: '', component : LandingPageComponent},
 
  // {path: "home", component : HomeComponent},
  { path : 'login', component : LoginComponent },
  {path : 'register', component : RegisterComponent},
  {path : 'menu', component : MenuComponent},

  
  {path : 'about-us', component : AboutUsComponent},
  { path: 'logout', component: LogoutComponent },
  
  { path: 'admin-page', component: AdminPageComponent },
  { path: 'user-page', component: UserPageComponent },

  { path: 'add-product', component: AddProductComponent },
  { path: 'showAllProducts', component: ShowAllProductsComponent },

  { path: 'cart', component: CartComponent, data: { skipAuthentication: true } },

  { path: 'payment', component: PaymentComponent },
  { path: 'admin-products', component: AdminProductsComponent },
  { path: 'edit-product/:id', component: EditProductComponent },

  { path: 'landing-page', component: LandingPageComponent },

  { path: 'main-course', component: MainCourseComponent },
  { path: 'biryani', component: BiryanisComponent },
  { path: 'thalis', component: ThalisComponent },
  { path: 'desserts', component: DessertsComponent },
  { path: 'starters', component: StartersComponent },
  { path: 'curbside', component: CurbsideComponent },

  { path: 'clients', component: ClientsComponent },
  { path: 'catering', component: CateringComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
