// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// // import { LoginService } from '../login.service';
// import { UserService } from '../user.service'; // Import UserService

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   errorMessage: string = '';

//   constructor(private router: Router, private userService: UserService) { }
  
//   login(formData: any) {
//     const emailId = formData.emailId || '';
//     const password = formData.password;

    
//     this.userService.loginUser({ emailId, password }).subscribe(
//       (response: any) => {
//         console.log('Server response:', response);
//         if (response.success) {
//           console.log('Login successful');
//           alert('Login successful');
          
//           if (emailId === 'keertana@gmail.com' && password === 'keertana') {
//             this.router.navigate(['/admin-page']);
//             this.userService.setUserLoggedIn();
//             console.log('Admin logged in:', this.userService.getUserLoggedStatus());
//           }
        
         
//         } else {
//           console.log('Login failed: Invalid credentials');
//           this.router.navigate(['/user-page']);
//           if (emailId === 'keertana@gmail.com' && password === 'keertana') {
//             alert("Login successful. Welcome to the admin page!");
//             this.router.navigate(['/admin-page']);
//           } else {
//             this.errorMessage = 'Invalid credentials. Please check your email and password.';
//           }
//         }
//       },
//       (error) => {
//         console.error('Error during login:', error);
//         this.errorMessage = 'An unexpected error occurred. Please try again later.';
//       }
//     );
//   }
  
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';

  constructor(private router: Router, private userService: UserService) { }
  
  login(formData: any) {
    const emailId = formData.emailId || '';
    const password = formData.password;

    this.userService.loginUser({ emailId, password }).subscribe(
      (response: any) => {
        console.log('Server response:', response);
        if (response.success) {
          console.log('Login successful');
          // alert('Login successful');
          
          if (emailId === 'keertana@gmail.com' && password === 'keertana') {
            console.log('Admin logged in:', this.userService.getUserLoggedStatus());
            this.router.navigate(['/admin-page']);
          } else {
            console.log('User logged in:', this.userService.getUserLoggedStatus());
            this.router.navigate(['/user-page']); 
          }
        
        } else {
          console.log('Login failed: Invalid credentials');
          if (emailId === 'keertana@gmail.com' && password === 'keertana') {
            // alert("Login successful. Welcome to the admin page!");
            this.router.navigate(['/admin-page']);
          } else {
            this.errorMessage = 'Invalid credentials. Please check your email and password.';
          }
        }
      },
      (error) => {
        console.error('Error during login:', error);
        this.errorMessage = 'An unexpected error occurred. Please try again later.';
      }
    );
  }  
}
