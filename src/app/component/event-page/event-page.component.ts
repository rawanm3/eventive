import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CustomEvent } from '../../interfaces/event.model'; 
import { catchError, from } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrl: './event-page.component.scss'
})
export class EventPageComponent implements OnInit{
//  
// 
event: CustomEvent | undefined;

constructor(
private route: ActivatedRoute,
private eventService: EventService
) {}

 ngOnInit(): void {
        const eventId = this.route.snapshot.paramMap.get('id');
        if (eventId) {
        this.eventService.getEventById(eventId).subscribe((eventData) => {
        if (eventData) {
        this.event = eventData;
        console.log('Retrieved event:', this.event);
        } else {
        console.warn('No event found for ID:', eventId);
        }
        });
        }
}
}

