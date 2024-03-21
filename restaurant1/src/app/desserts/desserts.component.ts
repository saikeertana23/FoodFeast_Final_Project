// desserts.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {
  dessertsProducts: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getDessertsProducts();
  }

  getDessertsProducts(): void {
    this.userService.getProductsByDesserts().subscribe(
      (response: any) => {
        this.dessertsProducts = response;
      },
      (error: any) => {
        console.error('Error fetching desserts products:', error);
      }
    );
  }
  addToCart(product: any): void {
    const cartProducts: any[] = JSON.parse(localStorage.getItem("cartProducts") || "[]");
    cartProducts.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }
}
