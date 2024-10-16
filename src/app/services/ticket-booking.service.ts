// import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { from, Observable } from 'rxjs';
// import { ticketBooking  } from '../../interface/ticketBooking'; // Ensure this path is correct

// @Injectable({
//   providedIn: 'root',
// })
// export class TicketBookingService {
//   private bookingsCollection;

//   constructor(private firestore: AngularFirestore) {
//     this.bookingsCollection = this.firestore.collection('bookings');
//   }

//   // Method to book a ticket
//   bookTicket(bookingData: ticketBooking): Observable<void> {
//     const id = this.firestore.createId();
//     return this.bookingsCollection.doc(id).set({
//       ...bookingData,
//       bookingDate: new Date(),
//     });
//   }
// }
// export type { ticketBooking };

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { ticketBooking } from '../../interface/ticketBooking'; 

@Injectable({
  providedIn: 'root'
})
export class TicketBookingService {

  constructor(private firestore: AngularFirestore) {}

  // Method to book a ticket
  bookTicket(bookingData: ticketBooking): Observable<void> {
    const bookingsCollection = this.firestore.collection('bookings'); 
    const id = this.firestore.createId();
    return from(
      bookingsCollection.doc(id).set({
        ...bookingData,
        bookingDate: new Date(),
      })
    );
  }
}
export type { ticketBooking };

