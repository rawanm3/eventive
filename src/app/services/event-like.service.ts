import { Injectable } from '@angular/core';
import { AppEvent } from '../interfaces/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventLikeService {

  private likedEvents: AppEvent[] = [];

  addLikedEvent(event: AppEvent): void {
    console.log(event);
    this.likedEvents.push(event);
  }

  getLikedEvents(): AppEvent[] {
    return this.likedEvents;
  }
}
