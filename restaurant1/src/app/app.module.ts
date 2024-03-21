// import { NgModule } from '@angular/core';
// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { FormsModule } from '@angular/forms';
// import { RegisterComponent } from './register/register.component';
// import { HeaderComponent } from './header/header.component';
// import { RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { CarouselComponent } from './carousel/carousel.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MenuComponent } from './menu/menu.component';
// import { HomeComponent } from './home/home.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { AdminHeaderComponent } from './admin-header/admin-header.component';
// import { FooterComponent } from './footer/footer.component';
// import { AboutUsComponent } from './about-us/about-us.component';
// import { ProductComponent } from './product/product.component';
// import { CartComponent } from './cart/cart.component';
// import { LogoutComponent } from './logout/logout.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     RegisterComponent,
//     HeaderComponent,
//     CarouselComponent,
//     MenuComponent,
//     HomeComponent,
//     ForgotPasswordComponent,
//     AdminHeaderComponent,
//     FooterComponent,
//     AboutUsComponent,
//     ProductComponent,
//     CartComponent,
//     LogoutComponent,  
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     RouterModule,
//     HttpClientModule,
//     NgbModule
//   ],
//   providers: [
//     provideClientHydration()
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


// import { NgModule } from '@angular/core';
// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { FormsModule } from '@angular/forms';
// import { RegisterComponent } from './register/register.component';
// import { HeaderComponent } from './header/header.component';
// import { RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { CarouselComponent } from './carousel/carousel.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MenuComponent } from './menu/menu.component';
// import { HomeComponent } from './home/home.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { AdminHeaderComponent } from './admin-header/admin-header.component';
// import { FooterComponent } from './footer/footer.component';
// import { AboutUsComponent } from './about-us/about-us.component';
// import { ProductComponent } from './product/product.component';
// import { CartComponent } from './cart/cart.component';
// import { LogoutComponent } from './logout/logout.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     RegisterComponent,
//     HeaderComponent,
//     CarouselComponent,
//     MenuComponent,
//     HomeComponent,
//     ForgotPasswordComponent,
//     AdminHeaderComponent,
//     FooterComponent,
//     AboutUsComponent,
//     ProductComponent,
//     CartComponent,
//     LogoutComponent,  
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     RouterModule,
//     HttpClientModule,
//     NgbModule
//   ],
//   providers: [
//     provideClientHydration(),
//     provideHttpClient() // Enable HttpClient
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



// import { NgModule } from '@angular/core';
// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http'; // Adjusted import

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { FormsModule } from '@angular/forms';
// import { RegisterComponent } from './register/register.component';

// import { RouterModule } from '@angular/router';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MenuComponent } from './menu/menu.component';
// import { HomeComponent } from './home/home.component';


// import { FooterComponent } from './footer/footer.component';
// import { AboutUsComponent } from './about-us/about-us.component';
// import { ProductComponent } from './product/product.component';

// import { LogoutComponent } from './logout/logout.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';
// import { AdminPageComponent } from './admin-page/admin-page.component';
// import { UserPageComponent } from './user-page/user-page.component';
// import { AddProductComponent } from './add-product/add-product.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     RegisterComponent,
  
   
//     MenuComponent,
//     HomeComponent,
   
   
//     FooterComponent,
//     AboutUsComponent,
//     ProductComponent,
   
//     LogoutComponent,
//          LandingPageComponent,
//          AdminPageComponent,
//          UserPageComponent,
//          AddProductComponent,  
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     RouterModule,
//     HttpClientModule,
//     NgbModule
//   ],
//   providers: [
//     provideClientHydration(),
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbPagination } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';
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
import { CarouselComponent } from './carousel/carousel.component';
import { MainCourseComponent } from './main-course/main-course.component';
import { BiryanisComponent } from './biryanis/biryanis.component';
import { ThalisComponent } from './thalis/thalis.component';
import { DessertsComponent } from './desserts/desserts.component';
import { ClientsComponent } from './clients/clients.component';
import { CommonModule } from '@angular/common';
import { NgxStripeModule, StripeService } from 'ngx-stripe';
import { CateringComponent } from './catering/catering.component';
import { StartersComponent } from './starters/starters.component';
import { OutdoorComponent } from './outdoor/outdoor.component';
import { CurbsideComponent } from './curbside/curbside.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    ProductComponent,
    LogoutComponent,
    LandingPageComponent,
    AdminPageComponent,
    UserPageComponent,
    AddProductComponent,
    ShowAllProductsComponent,
    CartComponent,
    PaymentComponent,
    AdminProductsComponent,
    EditProductComponent,
    CarouselComponent,
    MainCourseComponent,
    BiryanisComponent,
    ThalisComponent,
    DessertsComponent,
    ClientsComponent,
    CateringComponent,
    StartersComponent,
    OutdoorComponent,
    CurbsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    
    ReactiveFormsModule,
    NgxStripeModule,
    NgxStripeModule.forRoot('pk_test_51Ol3b7SGBRkKqNj4vldfF25aI5fEZLxXaS2IzGgvDkKep9DMpDmkAuap7zol3sND2dHrdAopHWT4HiIF2AIpVHH000UnNjweLv'),
    // StripeElementsModule,
    NgbPagination
  ],
  providers: [StripeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
