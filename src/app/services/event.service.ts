import { Injectable } from '@angular/core';
import { AppEvent } from '../component/events/app-event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
 private events: AppEvent[] = [
    { id: 1, title: 'Concert', description: 'Enjoy live music', date: '2024-01-01' },
    { id: 2, title: 'Art Gallery', description: 'Explore beautiful art', date: '2024-01-02' },
    // More events...
  ];

  private likedEvents: AppEvent[] = [];

  getEvents(): AppEvent[] {
    return this.events;
  }

  likeEvent(event: AppEvent): void {
    if (!this.likedEvents.find(e => e.id === event.id)) {
      this.likedEvents.push(event);
      event.liked = true; // Mark event as liked
    }
  }

  getLikedEvents(): AppEvent[] {
    return this.likedEvents;
  }
}
