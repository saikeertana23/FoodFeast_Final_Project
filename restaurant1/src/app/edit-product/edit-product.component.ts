// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { UserService } from '../user.service';


// @Component({
//   selector: 'app-edit-product',
//   templateUrl: './edit-product.component.html',
//   styleUrl: './edit-product.component.css'
// })
// export class EditProductComponent implements OnInit {
//   productId: number =0;
//   product: any = {}; 
//   error: string = '';


//   constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }


//   ngOnInit(): void {
   
//     this.productId = this.route.snapshot.params['id'];
    
//     this.getProductDetails();
//   }

//   getProductDetails(): void {
//     this.userService.getProductById(this.productId).subscribe(
//       (data: any) => {
//         console.log('Product data:', data); 
//         this.product = data; 
//       },
//       (error: any) => {  
//         this.error = error;
//       }
//     );
//   }
//   updateProduct(): void {
   
//     this.userService.updateProduct(this.productId, this.product).subscribe(
//       () => {
        
//         this.router.navigate(['/showAllProducts']);
//       },
//       (error: any) => {  
//         this.error = error; 
//       }
//     );
//   }
// }







// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-edit-product',
//   templateUrl: './edit-product.component.html',
//   styleUrls: ['./edit-product.component.css']
// })
// export class EditProductComponent implements OnInit {
//   productId: number = 0;
//   product: any = {};
//   error: string = '';

//   constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

//   ngOnInit(): void {
//     this.productId = +this.route.snapshot.params['id']; // Ensure the ID is parsed as a number
//     this.getProductDetails();
//   }

//   getProductDetails(): void {
//     this.userService.getProductById(this.productId).subscribe(
//       (data: any) => {
//         console.log('Product data:', data);
//         this.product = data;
//       },
//       (error: any) => {
//         this.error = error;
//       }
//     );
//   }

//   updateProduct(): void {
//     this.userService.updateProduct(this.productId, this.product).subscribe(
//       () => {
//         this.router.navigate(['/showAllProducts']);
//       },
//       (error: any) => {
//         this.error = error;
//       }
//     );
//   }
// }



// edit-product.component.ts

// edit-product.component.ts

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-edit-product',
//   templateUrl: './edit-product.component.html',
//   styleUrls: ['./edit-product.component.css']
// })
// export class EditProductComponent implements OnInit {
//   productId: string = '';
//   product: any = {}; // Object to store product data

//   constructor(
//     private route: ActivatedRoute,
//     private productService: UserService
//   ) { }

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.productId = params['id'];
//       this.getProductDetails();
//     });
//   }

//   getProductDetails(): void {
//     // Assuming getProductDetails method fetches product details and assigns them to this.product
//     this.product = {
//       productName: 'Product Name',
//       description: 'Product Description',
//       category: 'category',
//       price: 0,
//       imgUrl: 'https://example.com/image.jpg'
//     };
//   }

//   updateProduct(): void {
//     // Assuming updateProduct method updates the product details
//     console.log('Updated Product:', this.product);
//   }
// }








// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-edit-product',
//   templateUrl: './edit-product.component.html',
//   styleUrls: ['./edit-product.component.css']
// })
// export class EditProductComponent implements OnInit {
//   productId: number = 0;
//   product: any = {}; // Object to store product data

//   constructor(
//     private route: ActivatedRoute,
//     private productService: UserService
//   ) { }

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.productId = params['id'];
//       this.getProductDetails();
//     });
//   }

//   getProductDetails(): void {
//     // Assuming getProductDetails method fetches product details based on productId
//     this.productService.getProductById(this.productId).subscribe((data: any) => {
//       this.product = data;
//     });
//   }

//   updateProduct(): void {
//     // Assuming updateProduct method updates the product details
//     this.productService.updateProduct(this.productId, this.product).subscribe((data: any) => {
//       console.log('Product Updated Successfully:', data);
//       // Optionally, you can perform any additional actions after successful update
//     });
//   }
// }




// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-edit-product',
//   templateUrl: './edit-product.component.html',
//   styleUrls: ['./edit-product.component.css']
// })
// export class EditProductComponent implements OnInit {
//   productId: number = 0;
//   product: any = {}; // Object to store product data

//   constructor(
//     private route: ActivatedRoute,
//     private productService: UserService
//   ) { }

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.productId = +params['id']; // Parse productId to a number
//       this.getProductDetails();
//     });
//   }

//   getProductDetails(): void {
//     // Fetch product details based on productId
//     this.productService.getProductById(this.productId).subscribe((data: any) => {
//       this.product = data;
//     });
//   }

//   updateProduct(): void {
//     // Update product details
//     this.productService.updateProduct(this.productId, this.product).subscribe((data: any) => {
//       console.log('Product Updated Successfully:', data);
//       // Optionally, you can perform any additional actions after successful update
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId: number = 0;
  product: any = {}; // Object to store product data

  constructor(
    private route: ActivatedRoute,
    private productService: UserService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id']; // Parse productId to a number
      this.getProductDetails();
    });
  }

  getProductDetails(): void {
    // Fetch product details based on productId
    this.productService.showAllProducts().subscribe((products: any[]) => {
      this.product = products.find(product => product.id === this.productId);
    });
  }

  // updateProduct(): void {
  //   // Update product details
  //   this.productService.updateProduct(this.productId, this.product).subscribe((data: any) => {
  //     console.log('Product Updated Successfully:', data);
  //     // Optionally, you can perform any additional actions after successful update
  //   });
  // }

  updateProduct(): void {
    // Update product details
    this.productService.updateProduct(this.productId, this.product).subscribe((data: any) => {
      if (data !== null) {
        console.log('Product Updated Successfully:', data);
        alert("Product Updated Successfully")
        // Optionally, you can perform any additional actions after successful update
      } else {
        console.log('Product update response is null.');
        // Handle the case where the response is null
      }
    });
  }
  
}
