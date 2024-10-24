export interface ticketBooking {
    name: string;
    date: Date;
    time: string;
    location: string;
    description: string;
    selectedTicketType: string;
    userName: string;
    userEmail: string;
    ticketQuantity: number;
    ticketPrice: number;
    totalPrice: number;
    bookingDate: Date;
    ticketTypes: { name: string; price: number; }[]; 
}