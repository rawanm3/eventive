import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})


export class TicketsComponent implements OnInit{
  event = {
    name: 'Sample Event',
    date: new Date(),
    time: '7:00 PM',
    location: 'Event Venue',
    description: 'Event description goes here.',
    ticketTypes: [
      { name: 'General Admission', price: 20 },
      { name: 'VIP', price: 50 },
    ]
  };

  selectedTicketType = this.event.ticketTypes[0];
  ticketQuantity = 1;
  userName = '';
  userEmail = '';

  ngOnInit() {}

  get totalPrice() {
    return this.selectedTicketType.price * this.ticketQuantity;
  }

  bookTicket() {
    if (!this.userName || !this.userEmail) {
      alert("Please fill in your details to proceed.");
      return;
    }

    // Add booking logic here, such as sending data to Firebase or another backend
    alert(`Thank you, ${this.userName}! You have successfully booked ${this.ticketQuantity} ticket(s) for ${this.event.name}.`);
  }
}

