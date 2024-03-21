// // payment.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class PaymentService {
//   private baseUrl = 'http://localhost:8080'; // Your backend base URL

//   constructor(private http: HttpClient) { }

//   createPayment(amount: number): Observable<any> {
//     return this.http.post(`${this.baseUrl}/create-payment`, { amount });
//   }
// }


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class PaymentService {
//   private baseUrl = 'http://localhost:8080'; // Your backend base URL

//   constructor(private http: HttpClient) { }

//   createPaymentIntent(amount: number): Promise<string> {
//     return this.http.post<string>(`${this.baseUrl}/orders/create-payment-intent?amount=${amount}`, {}).toPromise();
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = 'http://localhost:8085'; // Your backend base URL

  constructor(private http: HttpClient) { }

  createPaymentIntent(amount: number): Promise<string | undefined> {
    return this.http.post<string>(`${this.baseUrl}/orders/create-payment-intent?amount=${amount}`, {}).toPromise();
  }
}



