// user-page.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  cartCount: number = 0;

  constructor(private userService: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.userService.getCartCount().subscribe((count: number) => {
      this.cartCount = count;
    });
  }

  redirectToCategory(category: string): void {
    switch (category) {
      case 'main-course':
        this.router.navigate(['/main-course']);
        break;
      case 'biryani':
        this.router.navigate(['/biryani']);
        break;
      case 'thalis':
        this.router.navigate(['/thalis']);
        break;
      case 'desserts':
        this.router.navigate(['/desserts']);
        break;
        case 'starters':
          this.router.navigate(['/starters']);
          break;
          case 'curbside':
            this.router.navigate(['/curbside']);
            break;
      default:
        break;
    }
  }
}
