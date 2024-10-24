import { Component, OnInit } from '@angular/core';
import { itDashboard } from '../../../interface/itDashboard';
import { itCreateEvent } from '../../../interface/itCreateEvent';
import { AuthService } from '../../services/auth.service';
import { DashboardDataService } from '../../services/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  onEvents: itDashboard[] = [];
  offEvents: itDashboard[] = [];
  errMsg: any;

  eventsList: itCreateEvent[] = [];  id : string ='';
  eventName : string ='';
  dateEvent : string ='';
  eventPrice: string ='';
  eventCapacity: string = '';

  offlinePageEvents: itCreateEvent[] = [];
  onlinePageEvents: itCreateEvent[] = [];

  constructor(private dashboardService: DashboardDataService) {}


  ngOnInit() {
  
  }

 

  itemsPerPage: number = 5; 
  offlineCurrentPage: number = 1;
  onlineCurrentPage: number = 1; 

  get offlinePaginatedEvents() {
    const startIndex = (this.offlineCurrentPage - 1) * this.itemsPerPage;
    return this.offEvents.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get onlinePaginatedEvents() {
    const startIndex = (this.onlineCurrentPage - 1) * this.itemsPerPage;
    return this.onEvents.slice(startIndex, startIndex + this.itemsPerPage);
  }

  deleteRow(table: 'offline' | 'online', index: number) {
    if (table === 'offline') {
      this.offEvents.splice(index, 1);
    } else {
      this.onEvents.splice(index, 1);
    }
  }

  switchOfflinePage(page: number) {
    this.offlineCurrentPage = page;
  }

  switchOnlinePage(page: number) {
    this.onlineCurrentPage = page;
  }

  get offlineTotalPages() {
    return Math.ceil(this.offEvents.length / this.itemsPerPage);
  }

  get onlineTotalPages() {
    return Math.ceil(this.onEvents.length / this.itemsPerPage);
  }
}



  
  
