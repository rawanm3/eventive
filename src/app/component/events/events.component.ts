import { Component, Input } from '@angular/core';
import { EventService } from './../../services/event.service';
import { AppEvent } from './app-event.model'; // Update import
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
// export class EventsComponent {
//   events: AppEvent[] = []; // Array to hold events
//     @Input() event!:  AppEvent;

//   constructor(private eventService: EventService) {
//     this.events = this.eventService.getEvents();
//   }
//   onLike() {
//     this.eventService.likeEvent(this.event);
//   }
export class EventsComponent implements AfterViewInit {
  ngAfterViewInit() {
    const tabs = document.querySelectorAll('.tab');
    const eventCards = document.querySelectorAll('.event-card');
    const likeButtons = document.querySelectorAll('.like-button');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active'); // Add active class to clicked tab

        // Get the selected category
        const selectedCategory = tab.textContent;

        // Show/Hide event cards based on category
        eventCards.forEach(card => {
          card.classList.remove('show');
          if (selectedCategory === 'All') {
            card.setAttribute('style', 'display: block');
            setTimeout(() => card.classList.add('show'), 10);
          } else if (card.getAttribute('data-category')?.includes(selectedCategory || '')) {
            card.setAttribute('style', 'display: block');
            setTimeout(() => card.classList.add('show'), 10);
          } else {
            setTimeout(() => card.setAttribute('style', 'display: none'), 300);
          }
        });
      });
    });

    // Like button functionality
    likeButtons.forEach(button => {
      button.addEventListener('click', () => {
        button.classList.toggle('text-colored'); // Toggle text color on click
      });
    });
  }
}
