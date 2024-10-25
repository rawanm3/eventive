import { Component, OnInit } from '@angular/core';
import { ticketBooking, TicketService } from '../../services/ticket-booking.service';

@Component({
  selector: 'app-tickets',
  templateUrl:'./tickets.component.html',
  styleUrl: './tickets.component.scss'
})


export class TicketsComponent implements OnInit{
  event = { name: '',date: new Date(),time: '',location: '',
    description: '',ticketTypes: [{ name: 'General Admission', price: 20 },{ name: 'VIP', price: 50 },
    ]
  };
  selectedTicketType = this.event.ticketTypes[0];
  ticketQuantity = 1;
  userName = '';
  userEmail = '';
  ticketBooking!: ticketBooking;

  constructor(private ticketsService : TicketService){}
  
  bookTicket() {
    if (!this.userName || !this.userEmail) {
      alert("Please fill in your details to proceed.");
      return;
    }
    this.ticketBooking = {
      name: this.event.name,
      date: this.event.date,
      time: this.event.time,
      location: this.event.location,
      description: this.event.description,
      ticketTypes: this.event.ticketTypes, 
      selectedTicketType: this.selectedTicketType.name,
      userName: this.userName,
      userEmail: this.userEmail,
      ticketQuantity: this.ticketQuantity,
      ticketPrice: this.selectedTicketType.price,
      totalPrice: this.totalPrice,
      bookingDate: new Date()
    };
    ////////////////////////////////////////////////////////////////
    this.ticketsService.addTickets(this.ticketBooking).subscribe({
      next :data => console.log(data),
      error :err => console.log(err)
    })
       // Add booking logic here, such as sending data to Firebase or another backend
    alert(`Thank you, ${this.userName}! You have successfully booked ${this.ticketQuantity} ticket(s) for ${this.event.name}.`);
  }
  ngOnInit() {}

  get totalPrice() {
    return this.selectedTicketType.price * this.ticketQuantity;
  }

}

