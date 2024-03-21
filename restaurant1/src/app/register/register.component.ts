import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService, private router : Router) { }

  registerUser(form: any) {
    const newUser = {
      "userName": form.username,
      "mobileNumber": form.mobile_number,
      "emailId": form.email_id,
      "password": form.password
  };

    this.userService.registerUser(newUser).subscribe(
      (data) => {
        console.log('User registered successfully:', data);
        // alert('Registration successful!'); 
        this.router.navigate(['/login'])

      },
      (error) => {
        console.error('Error registering user:', error);
      }
    );
  }
}


// import { Component } from '@angular/core';
// import { UserService } from '../user.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {

//   constructor(private userService: UserService, private router: Router) { }

//   registerUser(form: any) {
//     if (form.password !== form.confirmPassword) {
//       console.error('Passwords do not match');
//       return;
//     }

//     const newUser = {
//       "userName": form.username,
//       "mobileNumber": form.mobile_number,
//       "emailId": form.email_id,
//       "password": form.password
//     };

//     this.userService.registerUser(newUser).subscribe(
//       (data) => {
//         console.log('User registered successfully:', data);
//         this.router.navigate(['/login']);
//       },
//       (error) => {
//         console.error('Error registering user:', error);
//       }
//     );
//   }
// }










