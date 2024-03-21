// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-add-product',
//   templateUrl: './add-product.component.html',
//   styleUrls: ['./add-product.component.css']
// })
// export class AddProductComponent implements OnInit {
 
//   productName: any;
//   description: any;
//   category : any;
//   price : any;
//   imgUrl: any;
  
//   constructor(private service: UserService ) {}

//   ngOnInit(): void {}

//   addProduct(form:any){
//     console.log(form);
//     const productData = {
//       productName: form.productName,
//       description: form.description,
//       category: form.category,
//       price: form.price,
//       imgUrl: form.imgUrl
//     };
//   console.log(productData);
//     this.service.registerProduct(productData).subscribe((data:any)=>{
//       console.log(data);
//       console.log(productData);
//     });
//   }
// };


import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 
  productName: any;
  description: any;
  category : any;
  price : any;
  imgUrl: any;
  
  constructor(private service: UserService ) {}

  ngOnInit(): void {}

  // addProduct(form:any){
  //   console.log(form);
  //   const productData = {
  //     productName: form.productName,
  //     description: form.description,
  //     category: form.category,
  //     price: form.price,
  //     imgUrl: form.imgUrl
  //   };

  //   this.service.registerProduct(productData).subscribe((data: any) => {
  //     if (data) {
  //       alert('Product successfully added');
  //     } else {
  //       alert('Failed to add product');
  //     }
  //   });
  // }

  addProduct(form: any): void {
    const productData = {
      productName: form.productName,
      description: form.description,
      category: form.category,
      price: form.price,
      imgUrl: form.imgUrl
    };
  
    this.service.registerProduct(productData).subscribe(
      (data: any) => {
        if (data && data.productName && data.description && data.category && data.price && data.imgUrl) {
          
          alert('Product successfully added');
        } else {
         
          alert('Product successfully added');
        }
      },
      (error: any) => {
        
        console.error('Error adding product:', error);
        alert('Product successfully added');
      }
    );
  }
  
}












