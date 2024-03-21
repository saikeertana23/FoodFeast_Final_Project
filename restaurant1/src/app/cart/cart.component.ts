// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-cart',
// //   templateUrl: './cart.component.html',
// //   styleUrls: ['./cart.component.css']
// // })
// // export class CartComponent {
// //   receivedProducts: string | null = localStorage.getItem("cartProducts"); // Property to store products received from localStorage
// //   products: any[] = []; // Property to store parsed products

// //   constructor() {
// //     if (this.receivedProducts !== null) { // Check if receivedProducts is not null
// //       // Parse the receivedProducts data as JSON object and save in products
// //       this.products = JSON.parse(this.receivedProducts);

// //       // Just for testing:
// //       console.log(this.products); // Check the data in console
// //     }
// //   }
// // }


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   products: any[] = []; // Property to store products

//   constructor() {}

//   ngOnInit(): void {
//     this.loadCartProducts();
//   }

//   loadCartProducts(): void {
//     const receivedProducts: string | null = localStorage.getItem("cartProducts");
//     if (receivedProducts !== null) {
//       this.products = JSON.parse(receivedProducts);
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any[] = []; 
  total: number = 0; 
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadCartProducts();
    this.calculateTotal();
  }

  loadCartProducts(): void {
    const receivedProducts: string | null = localStorage.getItem("cartProducts");
    if (receivedProducts !== null) {
      this.products = JSON.parse(receivedProducts);
    }
  }

  calculateTotal(): void {
    this.total = this.products.reduce((total, product) => total + product.price, 0);
  }

  processPayment(): void {
    
    this.router.navigate(['/confirmation']);
  }

  removeFromCart(index: number): void {
    this.products.splice(index, 1); 
    localStorage.setItem("cartProducts", JSON.stringify(this.products)); 
    this.calculateTotal(); 
  }
}
