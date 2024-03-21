import { Injectable } from '@angular/core';
import Razorpay from 'razorpay';

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {
  private razorpay: any;

  constructor() {
    this.razorpay = new Razorpay({
      key: 'YOUR_RAZORPAY_KEY', // Replace with your actual Razorpay API key
      currency: 'INR' // Set your currency here
    });
  }

  // Method to create a Razorpay order
  createOrder(amount: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const options = {
        amount: amount * 100, // Razorpay accepts amount in paisa, so multiply by 100
        currency: 'INR',
        receipt: 'order_receipt_' + Math.floor(Math.random() * 100000),
        payment_capture: 1
      };

      this.razorpay.orders.create(options, (err: any, order: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(order.id);
        }
      });
    });
  }

  // Method to open Razorpay checkout form
  openCheckout(orderId: string): void {
    const options = {
      key: 'YOUR_RAZORPAY_KEY', // Replace with your actual Razorpay API key
      amount: amount * 100, // Razorpay accepts amount in paisa, so multiply by 100
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Purchase Description',
      image: 'https://example.com/logo.png', // URL of your company logo
      order_id: orderId,
      handler: function(response: any) {
        console.log(response);
        alert('Payment Successful');
        // Redirect or show success message
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      notes: {
        address: 'Customer Address'
      },
      theme: {
        color: '#3399cc' // Customize color
      }
    };

    const rzp = new this.razorpay(options);
    rzp.open();
  }
}
