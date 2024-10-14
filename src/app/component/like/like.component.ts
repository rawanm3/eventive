import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';
import { AppEvent } from '../../component/events/app-event.model'; // Ensure correct import


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {
 likedEvents: AppEvent[] = [];
event: any;

  constructor(private eventService: EventService) {
    this.likedEvents = this.eventService.getLikedEvents();
  }

}
