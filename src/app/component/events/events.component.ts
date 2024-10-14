import { Component, Input } from '@angular/core';
import { EventService } from './../../services/event.service';
import { AppEvent } from './app-event.model'; // Update import

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  events: AppEvent[] = []; // Array to hold events
    @Input() event!:  AppEvent;

  constructor(private eventService: EventService) {
    this.events = this.eventService.getEvents();
  }
  onLike() {
    this.eventService.likeEvent(this.event);
  }
}
