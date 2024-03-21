import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-curbside',
  templateUrl: './curbside.component.html',
  styleUrls: ['./curbside.component.css']
})
export class CurbsideComponent implements OnInit {
  curbsideProducts: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getCurbsideProducts();
  }

  getCurbsideProducts(): void {
    this.userService.getProductsByCurbside().subscribe(
      (response: any) => {
        this.curbsideProducts = response;
      },
      (error: any) => {
        console.error('Error fetching curbside products:', error);
      }
    );
  }

  addToCart(product: any): void {
    const cartProducts: any[] = JSON.parse(localStorage.getItem("cartProducts") || "[]");
    cartProducts.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }
}
