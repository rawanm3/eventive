import { Component, Input } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

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
  isLiked: boolean = false; // Initialize it to false
toggleLike() {
  this.isLiked = !this.isLiked;
}
 
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
  constructor(private router: Router) {}
  goToPage1() {
    this.router.navigate(['/page1']);
  }
  goToPage2() {
    this.router.navigate(['/page2']);
}
goToPage3() {
  this.router.navigate(['/page3']);
}
goToPage4() {
  this.router.navigate(['/page4']);
}
goToPage5() {
  this.router.navigate(['/page5']);
}
goToPage6() {
  this.router.navigate(['/page6']);
}
goToPage7() {
  this.router.navigate(['/page7']);
}
goToPage8() {
  this.router.navigate(['/page8']);
}
goToPage9() {
  this.router.navigate(['/page9']);
}
goToPage10() {
  this.router.navigate(['/page10']);
}
}