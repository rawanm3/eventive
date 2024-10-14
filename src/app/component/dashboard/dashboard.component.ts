import { Component } from '@angular/core';


interface Event {
  name: string;
  date: string;
  tickets: number;
  totalTickets: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
// export class DashboardComponent {
//   showTable: boolean = false;
//   borderColor: string = ''; 
//   borderVisible: boolean = false; 


//   showLastQuarter() {
//     this.showTable = false; 
//     this.borderVisible = false; 
//   }

  
//   onFocus(event: FocusEvent) {
//     const target = event.target as HTMLElement;
//     target.style.borderColor = '#D1410C';
//   }

//   onBlur(event: FocusEvent) {
//     const target = event.target as HTMLElement;
//     target.style.borderColor = '';
//   }
// }

export class DashboardComponent {
  switchTable(_t180: number) {
  throw new Error('Method not implemented.');
  }
    offlineEvents: Event[] = [
      { name: 'Giza event', date: '30/9/2024', tickets: 254, totalTickets: 250 },
      { name: 'Cairo event', date: '4/10/2024', tickets: 256, totalTickets: 250 },
      { name: 'Alexandria event', date: '4/10/2024', tickets: 211, totalTickets: 250 },
      { name: 'New Alamein event', date: '4/10/2024', tickets: 241, totalTickets: 300 },
      { name: 'sharm alshakh event', date: '1/10/2024', tickets: 755, totalTickets: 1000 },
      { name: 'New Alamein event', date: '1/10/2024', tickets: 200, totalTickets: 250 },
      { name: 'Alghardaqa event', date: '1/10/2024', tickets: 320, totalTickets: 400 },
      { name: 'cairo event', date: '1/10/2024', tickets: 321, totalTickets: 350 },
      { name: 'Alexandria event', date: '1/10/2024', tickets: 68, totalTickets: 100 },
      { name: 'Luxor event', date: '4/10/2024', tickets: 250, totalTickets: 250 },
      { name: 'Sharm El Sheikh event', date: '4/10/2024', tickets: 120, totalTickets: 200 },
    ];
  
    onlineEvents: Event[] = [
      { name: 'Online Conference', date: '1/10/2024', tickets: 100, totalTickets: 100 },
      { name: 'Webinar on Angular', date: '2/10/2024', tickets: 150, totalTickets: 150 },
      { name: 'Virtual Meetup', date: '3/10/2024', tickets: 200, totalTickets: 200 },
      { name: 'Online Workshop', date: '4/10/2024', tickets: 250, totalTickets: 300 },
      { name: 'New Alamein event', date: '1/10/2024', tickets: 200, totalTickets: 250 },  
      { name: 'Alghardaqa event', date: '1/10/2024', tickets: 320, totalTickets: 400 },
      { name: 'cairo event', date: '1/10/2024', tickets: 321, totalTickets: 350 },
      { name: 'Alexandria event', date: '1/10/2024', tickets: 68, totalTickets: 100 },
      { name: 'Giza event', date: '1/10/2024', tickets: 135, totalTickets: 300 },
      { name: 'New Alamein event', date: '4/10/2024', tickets: 241, totalTickets: 300 },
      { name: 'sharm alshakh event', date: '1/10/2024', tickets: 755, totalTickets: 1000 },
      { name: 'New Alamein event', date: '1/10/2024', tickets: 200, totalTickets: 250 },
  
    ];
  
    itemsPerPage: number = 5; // Number of items per page
    offlineCurrentPage: number = 1; // Current page for offline events
    onlineCurrentPage: number = 1; // Current page for online events
  
    get offlinePaginatedEvents() {
      const startIndex = (this.offlineCurrentPage - 1) * this.itemsPerPage;
      return this.offlineEvents.slice(startIndex, startIndex + this.itemsPerPage);
    }
  
    get onlinePaginatedEvents() {
      const startIndex = (this.onlineCurrentPage - 1) * this.itemsPerPage;
      return this.onlineEvents.slice(startIndex, startIndex + this.itemsPerPage);
    }
  
    deleteRow(table: 'offline' | 'online', index: number) {
      if (table === 'offline') {
        this.offlineEvents.splice(index, 1);
      } else {
        this.onlineEvents.splice(index, 1);
      }
    }
  
    switchOfflinePage(page: number) {
      this.offlineCurrentPage = page;
    }
  
    switchOnlinePage(page: number) {
      this.onlineCurrentPage = page;
    }
  
    get offlineTotalPages() {
      return Math.ceil(this.offlineEvents.length / this.itemsPerPage);
    }
  
    get onlineTotalPages() {
      return Math.ceil(this.onlineEvents.length / this.itemsPerPage);
    }
  }
  
