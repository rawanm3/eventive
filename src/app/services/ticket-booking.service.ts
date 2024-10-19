import { Injectable } from '@angular/core';
import { ticketBooking } from '../../interface/ticketBooking'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private ticketsIpi :string = 'https://eventive-55d33-default-rtdb.firebaseio.com/bookingTickets.json'
  constructor(private http: HttpClient ) { }

  addTickets(tickets :ticketBooking){
    return this.http.post<any>(this.ticketsIpi,tickets)
  }

}
export type { ticketBooking };

