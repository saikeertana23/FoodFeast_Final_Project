import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-starters',
  templateUrl: './starters.component.html',
  styleUrls: ['./starters.component.css']
})
export class StartersComponent implements OnInit {
  startersProducts: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getStartersProducts();
  }

  getStartersProducts(): void {
    this.userService.getProductsByStarters().subscribe(
      (response: any) => {
        this.startersProducts = response;
      },
      (error: any) => {
        console.error('Error fetching starters products:', error);
      }
    );
  }

  addToCart(product: any): void {
    const cartProducts: any[] = JSON.parse(localStorage.getItem("cartProducts") || "[]");
    cartProducts.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }
}
