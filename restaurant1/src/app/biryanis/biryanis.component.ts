// biryanis.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-biryanis',
  templateUrl: './biryanis.component.html',
  styleUrls: ['./biryanis.component.css']
})
export class BiryanisComponent implements OnInit {
  biryanisProducts: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getBiryanisProducts();
  }

  getBiryanisProducts(): void {
    this.userService.getProductsByBiryanis().subscribe(
      (response: any) => {
        this.biryanisProducts = response;
      },
      (error: any) => {
        console.error('Error fetching biryanis products:', error);
      }
    );
  }
  addToCart(product: any): void {
    const cartProducts: any[] = JSON.parse(localStorage.getItem("cartProducts") || "[]");
    cartProducts.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }
}
