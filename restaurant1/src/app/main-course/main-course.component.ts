// main-course.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-main-course',
  templateUrl: './main-course.component.html',
  styleUrls: ['./main-course.component.css']
})
export class MainCourseComponent implements OnInit {
  mainCourseProducts: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getMainCourseProducts();
  }

  getMainCourseProducts(): void {
    this.userService.getProductsByMainCourse().subscribe(
      (response: any) => {
        this.mainCourseProducts = response;
        console.log(this.mainCourseProducts); // Log retrieved products
      },
      (error: any) => {
        console.error('Error fetching main course products:', error);
      }
    );
  }
  
  addToCart(product: any): void {
    const cartProducts: any[] = JSON.parse(localStorage.getItem("cartProducts") || "[]");
    cartProducts.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }
}
