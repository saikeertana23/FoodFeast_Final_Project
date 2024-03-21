// // payment.component.ts
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { PaymentService } from '../payment.service';


// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent {
//   paymentForm: FormGroup;
//   paying = false;
//   alertMessage = '';

//   constructor(private fb: FormBuilder, private paymentService: PaymentService) {
//     this.paymentForm = this.fb.group({
//       amount: ['', Validators.required]
//     });
//   }

//   async handlePay(): Promise<void> {
//     if (this.paymentForm.invalid || this.paying) return;

//     this.paying = true;
//     const amount = this.paymentForm.value.amount;

//     try {
//       const { client_secret } = await this.paymentService.createPayment(amount).toPromise();
//       // Handle payment confirmation with client_secret
//       this.alertMessage = 'Payment successful';
//     } catch (error) {
//       console.error(error);
//       this.alertMessage = 'Payment failed';
//     } finally {
//       this.paying = false;
//     }
//   }
// }


// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// // import { StripeService, Elements, Element as StripeElement, ElementsOptions } from '@stripe/angular-stripe';
// // import { StripeService, Elements, Element as StripeElement, ElementsOptions } from '@stripe/angular-stripe';
// import { StripeService } from 'ngx-stripe';
// // import { Elements } from '@stripe/angular-stripe';
// import { NgxStripeModule } from 'ngx-stripe';

// import { PaymentService } from '../payment.service';

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent implements OnInit {
//   @ViewChild('cardElement') cardElement!: ElementRef;
//   stripe: any;
//   elements: Elements;
//   paymentForm!: FormGroup; // Ensure that paymentForm is initialized with '!' operator
//   paying = false;
//   alertMessage = '';

//   constructor(private fb: FormBuilder, private stripeService: StripeService, private paymentService: PaymentService) { }


//   async ngOnInit(): Promise<void> {
//     this.stripe = await this.stripeService.createStripe('sk_test_51Ol3b7SGBRkKqNj450brI6QX4bBmiStRxNvn7AymnqxTZmRSHCG5NtOlzT77RMojs8X1kCsZn3dPTHv3FANSGx7Q001KjhK3q6');
//     this.elements = this.stripe.elements();
//     const style = {
//       base: {
//         fontSize: '16px',
//         color: '#32325d',
//       },
//     };
//     const elementsOptions: ElementsOptions = {
//       style,
//     };
//     const cardElement: StripeElement = this.elements.create('card', elementsOptions);
//     cardElement.mount(this.cardElement.nativeElement);

//     // Initialize paymentForm using FormBuilder
//     this.paymentForm = this.fb.group({
//       amount: [''] // Add your form controls here
//     });
//   }

//   async handlePay(): Promise<void> {
//     if (this.paymentForm.invalid || this.paying) return;

//     this.paying = true;
//     const cardElement = this.elements.getElement('card');
//     const { error, paymentMethod } = await this.stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });

//     if (error) {
//       console.error(error);
//       this.paying = false;
//       return;
//     }

//     const amount = this.paymentForm.value.amount;
//     try {
//       const { client_secret } = await this.paymentService.createPayment(amount).toPromise();
//       // Handle payment confirmation with client_secret
//       console.log(paymentMethod);
//       this.alertMessage = 'Payment successful';
//     } catch (error) {
//       console.error(error);
//       this.alertMessage = 'Payment failed';
//     } finally {
//       this.paying = false;
//     }
//   }
// }


// import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { StripeService, StripeCardComponent } from 'ngx-stripe'; // Adjust imports based on ngx-stripe documentation
// import { PaymentService } from '../payment.service';

// declare var Stripe: any; // Declare Stripe variable

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent implements OnInit, AfterViewInit {
//   @ViewChild(StripeCardComponent) card!: StripeCardComponent;
//   paymentForm!: FormGroup;
//   paying = false;
//   alertMessage = '';
//   stripe: any; // Declare stripe property

//   constructor(private fb: FormBuilder, private stripeService: StripeService, private paymentService: PaymentService) { }

//   ngOnInit(): void {
//     this.paymentForm = this.fb.group({
//       amount: ['']
//     });
//   }

//   ngAfterViewInit(): void {
//     // Logic dependent on this.card can be placed here
//     this.stripe = Stripe('pk_test_51Ol3b7SGBRkKqNj4vldfF25aI5fEZLxXaS2IzGgvDkKep9DMpDmkAuap7zol3sND2dHrdAopHWT4HiIF2AIpVHH000UnNjweLv'); // Initialize Stripe with your public key
//   }

//   async handlePay(): Promise<void> {
//     if (this.paymentForm.invalid || this.paying || !this.card) return;

//     this.paying = true;

//     try {
//       const tokenResult = await this.stripeService.createToken(this.card.element, { name: 'Customer Name' }).toPromise();

//       if (tokenResult && tokenResult.token) {
//         console.log(tokenResult.token);
//         this.alertMessage = 'Payment successful';
//       } else {
//         console.error(tokenResult?.error);
//         this.alertMessage = 'Payment failed';
//       }
//     } catch (error) {
//       console.error(error);
//       this.alertMessage = 'Payment failed';
//     }

//     this.paying = false;
//   }
// }





// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { PaymentService } from '../services/payment.service';

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent implements OnInit {
//   paymentForm: FormGroup;
//   paying = false;
//   alertMessage = '';

//   constructor(private fb: FormBuilder, private paymentService: PaymentService) { }

//   ngOnInit(): void {
//     this.paymentForm = this.fb.group({
//       cardNumber: ['', Validators.required],
//       expiryDate: ['', Validators.required],
//       cvc: ['', Validators.required]
//     });
//   }

//   async handlePay(): Promise<void> {
//     if (this.paymentForm.invalid || this.paying) return;

//     this.paying = true;

//     try {
//       const amount = 100; // Amount to be paid, you can set dynamically based on your requirements
//       const clientSecret = await this.paymentService.createPaymentIntent(amount);
//       console.log(clientSecret); // Log the client secret, you can use it to confirm the payment on the backend
//       this.alertMessage = 'Payment successful';
//     } catch (error) {
//       console.error(error);
//       this.alertMessage = 'Payment failed';
//     }

//     this.paying = false;
//   }
// }





// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { PaymentService } from '../payment.service';


// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent implements OnInit {
//   paymentForm!: FormGroup;
//   paying = false;
//   alertMessage = '';

//   constructor(private fb: FormBuilder, private paymentService: PaymentService) { }

//   ngOnInit(): void {
//     this.paymentForm = this.fb.group({
//       cardNumber: ['', Validators.required],
//       expiryDate: ['', Validators.required],
//       cvc: ['', Validators.required]
//     });
//   }

//   async handlePay(): Promise<void> {
//     if (this.paymentForm.invalid || this.paying) return;
  
//     this.paying = true;
  
//     try {
//       const amount = 100; // Amount to be paid, you can set dynamically based on your requirements
//       const clientSecret = await this.paymentService.createPaymentIntent(amount);
//       if (clientSecret !== undefined) {
//         console.log(clientSecret); // Log the client secret, you can use it to confirm the payment on the backend
//         this.alertMessage = 'Payment successful';
//       } else {
//         throw new Error('Failed to get client secret');
//       }
//     } catch (error) {
//       console.error(error);
//       this.alertMessage = 'Payment failed';
//     }
  
//     this.paying = false;
//   }
  
// }


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { PaymentService } from '../payment.service';


// declare var Stripe: any; // Declare Stripe variable

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent implements OnInit {
//   paymentForm!: FormGroup; // Add ! to declare that paymentForm will be initialized in ngOnInit
//   paying = false;
//   alertMessage = '';
//   stripe: any;

//   constructor(private fb: FormBuilder, private paymentService: PaymentService) { } // No changes here

//   ngOnInit(): void {
//     this.paymentForm = this.fb.group({
//       cardNumber: ['', Validators.required],
//       expiryDate: ['', Validators.required],
//       cvc: ['', Validators.required]
//     });

//     this.stripe = Stripe('pk_test_51Ol3b7SGBRkKqNj4vldfF25aI5fEZLxXaS2IzGgvDkKep9DMpDmkAuap7zol3sND2dHrdAopHWT4HiIF2AIpVHH000UnNjweLv'); // Initialize Stripe with your publishable key
//   }

//   async handlePay(): Promise<void> {
//     if (this.paymentForm.invalid || this.paying) return;

//     this.paying = true;

//     try {
//       const amount = 100; // Amount to be paid, you can set dynamically based on your requirements
//       const clientSecret = await this.paymentService.createPaymentIntent(amount);
//       if (clientSecret !== undefined) {
//         console.log(clientSecret); // Log the client secret, you can use it to confirm the payment on the backend
//         this.alertMessage = 'Payment successful';
//       } else {
//         throw new Error('Failed to get client secret');
//       }
//     } catch (error) {
//       console.error(error);
//       this.alertMessage = 'Payment failed';
//     }

//     this.paying = false;
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { PaymentService } from '../payment.service';

// declare var Stripe: any; // Declare Stripe variable

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent implements OnInit {
//   paymentForm!: FormGroup;
//   paying = false;
//   alertMessage = ''; // Initialize alert message variable
//   stripe: any;

//   constructor(private fb: FormBuilder, private paymentService: PaymentService) { }

//   ngOnInit(): void {
//     this.paymentForm = this.fb.group({
//       cardNumber: ['', Validators.required],
//       expiryDate: ['', Validators.required],
//       cvc: ['', Validators.required]
//     });

//     this.stripe = Stripe('pk_test_51Ol3b7SGBRkKqNj4vldfF25aI5fEZLxXaS2IzGgvDkKep9DMpDmkAuap7zol3sND2dHrdAopHWT4HiIF2AIpVHH000UnNjweLv');
//   }

//   async handlePay(): Promise<void> {
//     if (this.paymentForm.invalid || this.paying) return;

//     this.paying = true;

//     try {
//       const amount = 100;
//       const clientSecret = await this.paymentService.createPaymentIntent(amount);
//       if (clientSecret !== undefined) {
//         console.log(clientSecret);
//         this.alertMessage = 'Payment successful'; // Set alert message on success
//       } else {
//         throw new Error('Failed to get client secret');
//       }
//     } catch (error) {
//       console.error(error);
//       this.alertMessage = 'Payment failed'; // Set alert message on failure
//     }

//     this.paying = false;
//   }
// }




import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from '../payment.service';
import { Stripe, StripeCardElement, StripeElements, StripeCardNumberElement, StripeCardExpiryElement, StripeCardCvcElement } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @ViewChild('cardNumber') cardNumberElement!: ElementRef;
  @ViewChild('expiryDate') expiryDateElement!: ElementRef;
  @ViewChild('cvc') cvcElement!: ElementRef;

  paymentForm!: FormGroup;
  paying = false;
  alertMessage = ''; // Initialize alert message variable
  stripe!: Stripe;
  elements: StripeElements | undefined;
  cardNumber: StripeCardNumberElement | undefined;
  expiryDate: StripeCardExpiryElement | undefined;
  cvc: StripeCardCvcElement | undefined;

  constructor(private fb: FormBuilder, private paymentService: PaymentService) { }

  async ngOnInit(): Promise<void> {
    this.paymentForm = this.fb.group({
      cardNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvc: ['', Validators.required]
    });

    const stripePromise = import('@stripe/stripe-js');
    const stripe = await stripePromise;
    const stripeKey = 'pk_test_51Ol3b7SGBRkKqNj4vldfF25aI5fEZLxXaS2IzGgvDkKep9DMpDmkAuap7zol3sND2dHrdAopHWT4HiIF2AIpVHH000UnNjweLv';
    this.stripe = (await stripe.loadStripe(stripeKey))!;
    if (!this.stripe) {
      console.error('Failed to load Stripe');
      return;
    }

    this.elements = this.stripe.elements();
    this.cardNumber = this.elements.create('cardNumber');
    this.expiryDate = this.elements.create('cardExpiry');
    this.cvc = this.elements.create('cardCvc');

    if (this.cardNumberElement && this.expiryDateElement && this.cvcElement) {
      this.cardNumber.mount(this.cardNumberElement.nativeElement);
      this.expiryDate.mount(this.expiryDateElement.nativeElement);
      this.cvc.mount(this.cvcElement.nativeElement);
    }
  }

  async handlePay(): Promise<void> {
    if (this.paymentForm.invalid || this.paying || !this.stripe) return;

    this.paying = true;

    try {
      const amount = 100;
      const clientSecret = await this.paymentService.createPaymentIntent(amount);
      if (clientSecret !== undefined) {
        console.log(clientSecret);
        this.alertMessage = 'Payment successful'; 
        alert("Successfully ordered and delivered to the shipping address");
      } else {
        throw new Error('Failed to get client secret');
      }
    } catch (error) {
      console.error(error);
      this.alertMessage = 'Payment failed'; 
 
    }

    this.paying = false;
  }
}






// import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { PaymentService } from '../payment.service';
// import { Stripe, StripeCardElement, StripeElements, StripeCardNumberElement, StripeCardExpiryElement, StripeCardCvcElement } from '@stripe/stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { MatSnackBar } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent implements OnInit {
//   @ViewChild('cardNumber') cardNumberElement!: ElementRef;
//   @ViewChild('expiryDate') expiryDateElement!: ElementRef;
//   @ViewChild('cvc') cvcElement!: ElementRef;

//   alertMessage: string = '';
//   paymentForm!: FormGroup;
//   paying = false;
//   stripe!: Stripe;
//   elements: StripeElements | undefined;
//   cardNumber: StripeCardNumberElement | undefined;
//   expiryDate: StripeCardExpiryElement | undefined;
//   cvc: StripeCardCvcElement | undefined;

//   constructor(private fb: FormBuilder, 
//               private paymentService: PaymentService,
//               private snackBar: MatSnackBar) { }

//   async ngOnInit(): Promise<void> {
//     this.paymentForm = this.fb.group({
//       cardNumber: ['', Validators.required],
//       expiryDate: ['', Validators.required],
//       cvc: ['', Validators.required]
//     });

//     const stripePromise = import('@stripe/stripe-js');
//     const stripe = await stripePromise;
//     const stripeKey = 'pk_test_51Ol3b7SGBRkKqNj4vldfF25aI5fEZLxXaS2IzGgvDkKep9DMpDmkAuap7zol3sND2dHrdAopHWT4HiIF2AIpVHH000UnNjweLv';
//     this.stripe = (await stripe.loadStripe(stripeKey))!;
//     if (!this.stripe) {
//       console.error('Failed to load Stripe');
//       return;
//     }

//     this.elements = this.stripe.elements();
//     this.cardNumber = this.elements.create('cardNumber');
//     this.expiryDate = this.elements.create('cardExpiry');
//     this.cvc = this.elements.create('cardCvc');

//     if (this.cardNumberElement && this.expiryDateElement && this.cvcElement) {
//       this.cardNumber.mount(this.cardNumberElement.nativeElement);
//       this.expiryDate.mount(this.expiryDateElement.nativeElement);
//       this.cvc.mount(this.cvcElement.nativeElement);
//     }
//   }

//   async handlePay(): Promise<void> {
//     if (this.paymentForm.invalid || this.paying || !this.stripe) return;

//     this.paying = true;

//     try {
//       const amount = 100;
//       const clientSecret = await this.paymentService.createPaymentIntent(amount);
//       if (clientSecret !== undefined) {
//         console.log(clientSecret);
//         this.showSuccessAlert('Payment successful');
//         this.processOrder(); // Process the order after showing the success alert
//       } else {
//         throw new Error('Failed to get client secret');
//       }
//     } catch (error) {
//       console.error(error);
//       this.showErrorAlert('Payment failed');
//     }

//     this.paying = false;
//   }

//   async processOrder(): Promise<void> {
//     // Simulate order processing (replace with actual logic)
//     // After successful payment, show the order success alert
//     this.showSuccessAlert('Successfully ordered and delivered to the shipping address');
//   }

//   showSuccessAlert(message: string): void {
//     this.snackBar.open(message, 'Close', {
//       duration: 3000,
//       panelClass: ['success-snackbar']
//     });
//   }

//   showErrorAlert(message: string): void {
//     this.snackBar.open(message, 'Close', {
//       duration: 3000,
//       panelClass: ['error-snackbar']
//     });
//   }
// }
