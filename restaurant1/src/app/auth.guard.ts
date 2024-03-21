// import { Injectable } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';

// import { UserService } from './user.service';

// // export const authGuard: CanActivateFn = (route, state) => {
// //   return true;
// // };

// @Injectable({   // <-- This is important
//   providedIn: 'root'
// })
// export class AuthGuard {

//   constructor(private service : UserService, private router : Router) {}

//   canActivate(): boolean {

    
//     if(this.service.getUserLoggedStatus()){
//        return true;
//     }

   
// else{
//   this.router.navigate(['login']);
//   return false;
// }
//   }

// }


import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if the route data contains a flag indicating that authentication is not required
    if (route.data && route.data['skipAuthentication']) {
      return true; // Allow access to routes that don't require authentication
    }

    // If user is logged in, allow access
    if (this.userService.getUserLoggedStatus()) {
      return true;
    }
    
    // If user is not logged in, redirect to the login page
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
