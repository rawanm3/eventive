import { Component, OnInit } from '@angular/core';

import { DashboardDataService } from '../../services/dashboard-data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})


export class DashboardComponent implements OnInit{

  onEvents : any =[]
  offEvents : any =[]
  errMsg :any ;

  constructor(private events :DashboardDataService){}
  ngOnInit(): void {
   this.events.getOffEvents().subscribe({
    next: (data)=>{
      this.offEvents = data
    console.log(data)},
    error :(err) =>{
      this.errMsg=err;
     }
   });

  this.events.getOnEvents().subscribe({
    next:(data)=>{
      this.onEvents = data
      console.log(data)},
      error :(err) =>{
       this.errMsg=err; 
      },
  })
  }
    itemsPerPage: number = 5; // Number of items per page
    offlineCurrentPage: number = 1; // Current page for offline events
    onlineCurrentPage: number = 1; // Current page for online events
  
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
  
