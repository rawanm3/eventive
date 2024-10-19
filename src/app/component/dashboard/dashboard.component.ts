
import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../../services/dashboard-data.service';
import { itDashboard } from '../../../interface/itDashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {
  onEvents: itDashboard[] = [];
  offEvents: itDashboard[] = [];
  errMsg: any;

  constructor(private dashboardServices: DashboardDataService) {}

 

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



  
  
