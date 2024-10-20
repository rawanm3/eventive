import { Injectable } from '@angular/core';
import { AppEvent } from '../interfaces/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
 private events: AppEvent[] = [
    { id: '1', name: 'Concert', description: 'Enjoy live music', date: '2024-01-01',liked:true },
    { id: '2', name: 'Art Gallery', description: 'Explore beautiful art', date: '2024-01-02',liked:true },
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
