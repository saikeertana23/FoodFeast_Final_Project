import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-all-products',
  templateUrl: './show-all-products.component.html',
  styleUrl: './show-all-products.component.css'
})
export class ShowAllProductsComponent implements OnInit{
  products:any;
  cartProducts: any[] = [];
  constructor(private service:UserService){
    
  }

  ngOnInit(): void {
    this.service.showAllProducts().subscribe((data:any)=>{
      this.products = data;
      console.log(data);
    })
  }

  addToCart(product: any): void {
    const cartProducts: any[] = JSON.parse(localStorage.getItem("cartProducts") || "[]");
    cartProducts.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }
  
}
