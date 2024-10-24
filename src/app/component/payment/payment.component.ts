import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
//   private stripe: any;
//   private clientSecret: string | undefined;
//   cardElement: any;

//   constructor(private http: HttpClient) {
//     this.stripe = (window as any).Stripe('YOUR_PUBLIC_STRIPE_KEY'); // Replace with your public Stripe key
//   }

//   async getTicket() {
//   const paymentIntentResponse = await this.createPaymentIntent(1000); // Amount in cents ($10.00)
  
//   // Ensure paymentIntentResponse is defined and has a clientSecret
//   if (paymentIntentResponse && paymentIntentResponse.clientSecret) {
//     this.clientSecret = paymentIntentResponse.clientSecret;

//     const { error } = await this.stripe.confirmCardPayment(this.clientSecret, {
//       payment_method: {
//         card: this.cardElement, // Reference to your card element
//         billing_details: {
//           name: 'Customer Name' // Replace with actual customer details
//         }
//       }
//     });

//     if (error) {
//       console.error('Payment failed:', error);
//       alert('Payment failed: ' + error.message);
//     } else {
//       alert('Payment succeeded!');
//     }
//   } else {
//     console.error('Failed to create payment intent');
//     alert('Failed to create payment intent');
//   }
// }

// private createPaymentIntent(amount: number): Promise<{ clientSecret: string }> {
//   return this.http.post<{ clientSecret: string }>('http://localhost:3000/create-payment-intent', { amount })
//     .toPromise()
//     .then(response => {
//       if (response && response.clientSecret) {
//         return response; // Return the response if it's valid
//       }
//       throw new Error('No clientSecret returned'); // Throw an error if it's undefined
//     });
// }


    // document.addEventListener('DOMContentLoaded', () => {
    //   const form = document.getElementById('paymentForm');
    //   const cardNumber = document.getElementById('cardNumber');
    //   const expiry = document.getElementById('expiry');
    //   const cvv = document.getElementById('cvv');
    //   const successMessage = document.querySelector('.success-message');
    //   const cardIcons = document.querySelectorAll('.card-icons img');
    //   const dynamicCardIcon = document.getElementById('dynamic-card-icon');

    //   function detectCardType(number) {
    //     const cleanNumber = number.replace(/\D/g, '');
    //     let cardType = '';

    //     // Visa
    //     if (cleanNumber.startsWith('4')) {
    //       cardType = 'visa';
    //     }
    //     // Mastercard
    //     else if (/^5[1-5]/.test(cleanNumber)) {
    //       cardType = 'mastercard';
    //     }
    //     // American Express
    //     else if (/^3[47]/.test(cleanNumber)) {
    //       cardType = 'amex';
    //     }

    //     cardIcons.forEach(icon => {
    //       icon.classList.toggle('active', icon.id === `${cardType}-icon`);
    //     });

    //     if (cardType === 'amex') {
    //       cvv.maxLength = 4;
    //       cvv.placeholder = '1234';
    //     } else {
    //       cvv.maxLength = 3;
    //       cvv.placeholder = '123';
    //     }

    //     return cardType;
    //   }

    //   function isValidCardNumber(number) {
    //     const cleanNumber = number.replace(/\D/g, '');
    //     if (!cleanNumber) return false;

    //     let sum = 0;
    //     let isEven = false;

    //     for (let i = cleanNumber.length - 1; i >= 0; i--) {
    //       let digit = parseInt(cleanNumber[i]);

    //       if (isEven) {
    //         digit *= 2;
    //         if (digit > 9) {
    //           digit -= 9;
    //         }
    //       }

    //       sum += digit;
    //       isEven = !isEven;
    //     }

    //     return sum % 10 === 0;
    //   }

    //   cardNumber.addEventListener('input', (e) => {
    //     let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
    //     let formattedValue = '';

    //     const cardType = detectCardType(value);

    //     if (cardType === 'amex') {
    //       for (let i = 0; i < value.length; i++) {
    //         if (i === 4 || i === 10) formattedValue += ' ';
    //         formattedValue += value[i];
    //       }
    //       e.target.maxLength = 17;
    //     } else {
    //       for (let i = 0; i < value.length; i++) {
    //         if (i > 0 && i % 4 === 0) formattedValue += ' ';
    //         formattedValue += value[i];
    //       }
    //       e.target.maxLength = 19;
    //     }

    //     e.target.value = formattedValue;

    //     const isValid = isValidCardNumber(value);
    //     e.target.classList.toggle('error', !isValid && value.length > 0);
    //   });

    //   expiry.addEventListener('input', (e) => {
    //     let value = e.target.value.replace(/\D/g, '');
    //     if (value.length >= 2) {
    //       const month = parseInt(value.slice(0, 2));
    //       if (month > 12) value = '12' + value.slice(2);
    //       value = value.slice(0, 2) + '/' + value.slice(2);
    //     }
    //     e.target.value = value;
    //   });

    //   form.addEventListener('submit', (e) => {
    //     e.preventDefault();

    //     const cardNumberValue = cardNumber.value.replace(/\s/g, '');
    //     if (!isValidCardNumber(cardNumberValue)) {
    //       cardNumber.classList.add('error');
    //       return;
    //     }

    //     form.style.display = 'none';
    //     successMessage.style.display = 'block';

    //     setTimeout(() => {
    //       form.reset();
    //       form.style.display = 'flex';
    //       successMessage.style.display = 'none';
    //       cardIcons.forEach(icon => icon.classList.remove('active'));
    //     }, 3000);
    //   });
    // });

}

