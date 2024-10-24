import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';


@Component({
  selector: 'app-like',
  templateUrl:'./like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {
event: any;

  // constructor(private eventService: EventService) {
  //   this.likedEvents = this.eventService.getLikedEvents();
  // }

}
