
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLoggedIn: boolean;
  loginStatus: Subject<any>; 
  private baseUrl = 'http://localhost:8085';
  private cartItems: any[] = [];
  private cartCount: Subject<number> = new Subject<number>();

  constructor(private http: HttpClient) { 
    this.isUserLoggedIn = false;
    this.loginStatus = new Subject();
  }

  getLoginStatus(): any {
    return this.loginStatus.asObservable();
  }

  setUserLoggedIn(): void {
    this.isUserLoggedIn = true;
    this.loginStatus.next(true); 
  }

  getUserLoggedStatus(): boolean {
    return this.isUserLoggedIn;
  }

  setUserLogout(): void {
    this.isUserLoggedIn = false;
    this.loginStatus.next(false);
  }

  registerUser(user: any) {
    return this.http.post(`${this.baseUrl}/registerUser`, user);
  }

  loginUser(credentials: any) {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  registerProduct(productData: any): any {
    return this.http.post(`${this.baseUrl}/registerProduct`, productData);
  }

  showAllProducts(): any {
    return this.http.get(`${this.baseUrl}/showAllProducts`);
  }

  addToCart(product: any): void {
    this.cartItems.push(product);
    this.cartCount.next(this.cartItems.length);
  }

  getCartCount(): any {
    return this.cartCount.asObservable();
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  getTotal(): number {
    return this.cartItems.reduce((total, product) => total + product.price, 0);
  }

  deleteProduct(productId: number): any {
    return this.http.delete(`${this.baseUrl}/deleteProduct/${productId}`);
  }
  
  updateProduct(productId: number, productData: any): any {
    return this.http.put(`${this.baseUrl}/editProduct/${productId}`, productData);
  }
  

  getProductById(productId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/showAllProducts/${productId}`);
  }
  

  getProductDetails(productId: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8085/editProduct/${productId}`);
  }

  // In UserService

getProductsByMainCourse(): Observable<any> {
  return this.http.get(`${this.baseUrl}/productsByCategory/Main-Course`);
}

getProductsByBiryanis(): Observable<any> {
  return this.http.get(`${this.baseUrl}/productsByCategory/Biryani`);
}

getProductsByThalis(): Observable<any> {
  return this.http.get(`${this.baseUrl}/productsByCategory/Thalis`);
}

getProductsByDesserts(): Observable<any> {
  return this.http.get(`${this.baseUrl}/productsByCategory/Desserts`);
}

getProductsByStarters(): Observable<any> {
  return this.http.get(`${this.baseUrl}/productsByCategory/Starters`);
}

getProductsByCurbside(): Observable<any> {
  return this.http.get(`${this.baseUrl}/productsByCategory/Curbside`);
}


getProductsBy(): Observable<any> {
  return this.http.get(`${this.baseUrl}/productsByCategory/Desserts`);
}
getAllUsers(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/users`);
}

}












