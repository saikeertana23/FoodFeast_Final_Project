// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrl: './product.component.css'
// })
// export class ProductComponent {
//       products: any;
//       constructor(){
//         this.products = [

//           {"id":1,"productName":"malai kofta","description":"Fried balls of potato and paneer in a rich and creamy mild gravy ","price":259,"imgsrc":"assets/images/products/malai.jpg"},
//           {"id":2,"productName":"Paneer Barbecue","description":"Indian cottage cheese aka Paneer marinated in a spicy and super flavorful tandoori masala & grilled to perfection!","price":300+"/-","imgsrc":"assets/images/products/paneer.jpeg"},
//           {"id":3,"productName":"Aloo Shikhari","description":"Dices of Baby Potatoes mixed in a special piquant Indian Herb Sauce ","price":200,"imgsrc":"assets/images/products/aloo.jpeg"},
//           {"id":4,"productName":"Hara Bhara Kabab","description":"Deep Fried Kababs made of choicest vegetables boiled and mixed with Leafy Greens, Paneer and Bread Crumbs ","price":300,"imgsrc":"assets/images/products/kabab.jpg"},

//           {"id":1,"productName":"malai kofta","description":"Fried balls of potato and paneer in a rich and creamy mild gravy ","price":259,"imgsrc":"assets/images/products/malai.jpg"},
//           {"id":2,"productName":"Paneer Barbecue","description":"Indian cottage cheese aka Paneer marinated in a spicy and super flavorful tandoori masala & grilled to perfection!","price":300+"/-","imgsrc":"assets/images/products/paneer.jpeg"},
//           {"id":3,"productName":"Aloo Shikhari","description":"Dices of Baby Potatoes mixed in a special piquant Indian Herb Sauce ","price":200,"imgsrc":"assets/images/products/aloo.jpeg"},
//           {"id":4,"productName":"Hara Bhara Kabab","description":"Deep Fried Kababs made of choicest vegetables boiled and mixed with Leafy Greens, Paneer and Bread Crumbs ","price":300,"imgsrc":"assets/images/products/kabab.jpg"},

//           {"id":1,"productName":"malai kofta","description":"Fried balls of potato and paneer in a rich and creamy mild gravy ","price":259,"imgsrc":"assets/images/products/malai.jpg"},
//           {"id":2,"productName":"Paneer Barbecue","description":"Indian cottage cheese aka Paneer marinated in a spicy and super flavorful tandoori masala & grilled to perfection!","price":300+"/-","imgsrc":"assets/images/products/paneer.jpeg"},
//           {"id":3,"productName":"Aloo Shikhari","description":"Dices of Baby Potatoes mixed in a special piquant Indian Herb Sauce ","price":200,"imgsrc":"assets/images/products/aloo.jpeg"},
//           {"id":4,"productName":"Hara Bhara Kabab","description":"Deep Fried Kababs made of choicest vegetables boiled and mixed with Leafy Greens, Paneer and Bread Crumbs ","price":300,"imgsrc":"assets/images/products/kabab.jpg"},
//         ]
//       }
// }


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.css']
// })
// export class ProductComponent {
//   products: any;
//   currentPage: number = 1;
//   pageSize: number = 4; // Number of products per page

//   constructor() {
//     this.products = [
//       {"id":1,"productName":"malai kofta","description":"Fried balls of potato and paneer in a rich and creamy mild gravy ","price":259,"imgsrc":"assets/images/products/malai.jpg"},
//       {"id":2,"productName":"Paneer Barbecue","description":"Indian cottage cheese aka Paneer marinated in a spicy and super flavorful tandoori masala & grilled to perfection!","price":300+"/-","imgsrc":"assets/images/products/paneer.jpeg"},
//       {"id":3,"productName":"Aloo Shikhari","description":"Dices of Baby Potatoes mixed in a special piquant Indian Herb Sauce ","price":200,"imgsrc":"assets/images/products/aloo.jpeg"},
//       {"id":4,"productName":"Hara Bhara Kabab","description":"Deep Fried Kababs made of choicest vegetables boiled and mixed with Leafy Greens, Paneer and Bread Crumbs ","price":300,"imgsrc":"assets/images/products/kabab.jpg"},

//       {"id":5,"productName":"malai kofta","description":"Fried balls of potato and paneer in a rich and creamy mild gravy ","price":259,"imgsrc":"assets/images/products/malai.jpg"},
//       {"id":6,"productName":"Paneer Barbecue","description":"Indian cottage cheese aka Paneer marinated in a spicy and super flavorful tandoori masala & grilled to perfection!","price":300+"/-","imgsrc":"assets/images/products/paneer.jpeg"},
//       {"id":7,"productName":"Aloo Shikhari","description":"Dices of Baby Potatoes mixed in a special piquant Indian Herb Sauce ","price":200,"imgsrc":"assets/images/products/aloo.jpeg"},
//       {"id":8,"productName":"Hara Bhara Kabab","description":"Deep Fried Kababs made of choicest vegetables boiled and mixed with Leafy Greens, Paneer and Bread Crumbs ","price":300,"imgsrc":"assets/images/products/kabab.jpg"},

//       {"id":9,"productName":"malai kofta","description":"Fried balls of potato and paneer in a rich and creamy mild gravy ","price":259,"imgsrc":"assets/images/products/malai.jpg"},
//       {"id":10,"productName":"Paneer Barbecue","description":"Indian cottage cheese aka Paneer marinated in a spicy and super flavorful tandoori masala & grilled to perfection!","price":300+"/-","imgsrc":"assets/images/products/paneer.jpeg"},
//       {"id":11,"productName":"Aloo Shikhari","description":"Dices of Baby Potatoes mixed in a special piquant Indian Herb Sauce ","price":200,"imgsrc":"assets/images/products/aloo.jpeg"},
//       {"id":12,"productName":"Hara Bhara Kabab","description":"Deep Fried Kababs made of choicest vegetables boiled and mixed with Leafy Greens, Paneer and Bread Crumbs ","price":300,"imgsrc":"assets/images/products/kabab.jpg"}
//     ];
//   }

//   getPaginatedProducts(): any[] {
//     const startIndex = (this.currentPage - 1) * this.pageSize;
//     const endIndex = Math.min(startIndex + this.pageSize, this.products.length);
//     return this.products.slice(startIndex, endIndex);
//   }

//   nextPage(): void {
//     if (this.currentPage < this.getTotalPages()) {
//       this.currentPage++;
//     }
//   }

//   prevPage(): void {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//     }
//   }

//   getTotalPages(): number {
//     return Math.ceil(this.products.length / this.pageSize);
//   }
// }


import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: any;
  currentPage: number = 1;
  pageSize: number = 4; 
  cartItemCount: number = 0;

  constructor(private service: UserService) {
    
    // this.products = [
    //   {"id":1,"productName":"malai kofta","description":"Fried balls of potato and paneer in a rich and creamy mild gravy ","price":259,"imgsrc":"assets/images/products/malai.jpg"},
    //   {"id":2,"productName":"Paneer Barbecue","description":"Indian cottage cheese aka Paneer marinated in a spicy and super flavorful tandoori masala & grilled to perfection!","price":300+"/-","imgsrc":"assets/images/products/paneer.jpeg"},
    //   {"id":3,"productName":"Aloo Shikhari","description":"Dices of Baby Potatoes mixed in a special piquant Indian Herb Sauce ","price":200,"imgsrc":"assets/images/products/aloo.jpeg"},
    //   {"id":4,"productName":"Hara Bhara Kabab","description":"Deep Fried Kababs made of choicest vegetables boiled and mixed with Leafy Greens, Paneer and Bread Crumbs ","price":300,"imgsrc":"assets/images/products/kabab.jpg"},

    //   {"id":7,"productName":"Aloo Shikhari","description":"Dices of Baby Potatoes mixed in a special piquant Indian Herb Sauce ","price":200,"imgsrc":"assets/images/products/aloo.jpeg"},
    //   {"id":8,"productName":"Hara Bhara Kabab","description":"Deep Fried Kababs made of choicest vegetables boiled and mixed with Leafy Greens, Paneer and Bread Crumbs ","price":300,"imgsrc":"assets/images/products/kabab.jpg"},
    //   {"id":5,"productName":"malai kofta","description":"Fried balls of potato and paneer in a rich and creamy mild gravy ","price":259,"imgsrc":"assets/images/products/malai.jpg"},
    //   {"id":6,"productName":"Paneer Barbecue","description":"Indian cottage cheese aka Paneer marinated in a spicy and super flavorful tandoori masala & grilled to perfection!","price":300+"/-","imgsrc":"assets/images/products/paneer.jpeg"},
      

    //   {"id":10,"productName":"Paneer Barbecue","description":"Indian cottage cheese aka Paneer marinated in a spicy and super flavorful tandoori masala & grilled to perfection!","price":300+"/-","imgsrc":"assets/images/products/paneer.jpeg"},
    //   {"id":11,"productName":"Aloo Shikhari","description":"Dices of Baby Potatoes mixed in a special piquant Indian Herb Sauce ","price":200,"imgsrc":"assets/images/products/aloo.jpeg"},
    //   {"id":9,"productName":"malai kofta","description":"Fried balls of potato and paneer in a rich and creamy mild gravy ","price":259,"imgsrc":"assets/images/products/malai.jpg"},
     
    //   {"id":12,"productName":"Hara Bhara Kabab","description":"Deep Fried Kababs made of choicest vegetables boiled and mixed with Leafy Greens, Paneer and Bread Crumbs ","price":300,"imgsrc":"assets/images/products/kabab.jpg"}
    // ];
  }

  ngOnInit(): void {
    this.service.showAllProducts().subscribe((data:any)=>{
      this.products=data;
      console.log(data); 
    });
  }

  // getPaginatedProducts(): any[] {
  //   const startIndex = (this.currentPage - 1) * this.pageSize;
  //   const endIndex = Math.min(startIndex + this.pageSize, this.products.length);
  //   return this.products.slice(startIndex, endIndex);
  // }

  // addToCart(product: any): void {
    
  //   this.cartItemCount++;
  //   console.log('Product added to cart:', product);
  // }

  // nextPage(): void {
  //   if (this.currentPage < this.getTotalPages()) {
  //     this.currentPage++;
  //   }
  // }

  // prevPage(): void {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //   }
  // }

  // getTotalPages(): number {
  //   return Math.ceil(this.products.length / this.pageSize);
  // }
}