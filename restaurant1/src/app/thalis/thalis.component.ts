// thalis.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-thalis',
  templateUrl: './thalis.component.html',
  styleUrls: ['./thalis.component.css']
})
export class ThalisComponent implements OnInit {
  thalisProducts: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getThalisProducts();
  }

  getThalisProducts(): void {
    this.userService.getProductsByThalis().subscribe(
      (response: any) => {
        this.thalisProducts = response;
      },
      (error: any) => {
        console.error('Error fetching thalis products:', error);
      }
    );
  }
  addToCart(product: any): void {
    const cartProducts: any[] = JSON.parse(localStorage.getItem("cartProducts") || "[]");
    cartProducts.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }
}
