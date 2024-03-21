



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: any[] = [];
  pagedProducts: any[] = [];
  currentPage: number = 1;
  pageSize: number = 10; 
  totalItems: number = 0;
  
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.service.showAllProducts().subscribe((data: any) => {
      this.products = data;
      this.totalItems = this.products.length;
      this.setPage(1);
    });
  }

  setPage(page: number): void {
    this.currentPage = page;
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize - 1, this.totalItems - 1);
    this.pagedProducts = this.products.slice(startIndex, endIndex + 1);
  }

  onPageChange(pageNumber: number): void {
    this.setPage(pageNumber);
  }

  deleteProduct(product: any): void {
    this.service.deleteProduct(product.id).subscribe(() => {
      this.loadProducts(); 
    });
  }

  editProduct(product: any): void {
    this.router.navigate(['/edit-product', product.id]);
  }
}


