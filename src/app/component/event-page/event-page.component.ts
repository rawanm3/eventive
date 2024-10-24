import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CustomEvent } from '../../interfaces/event.model'; 
import { catchError, from } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrl: './event-page.component.scss'
})
export class EventPageComponent implements OnInit{
   events: any[] = []; // Define the events property

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events; // Assign the retrieved events to the property
    });
  }
  }
// events: CustomEvent[] = []; 
//   constructor(
//     private route: ActivatedRoute,
//     private eventService: EventService,
//     private router: Router
//   ) {}

//   ngOnInit() {
//     this.eventService.getEvents().subscribe(data => {
//       this.events = data ;
//     });
//   }

 


