import { Injectable } from '@angular/core';
import { CustomEvent } from '../interfaces/event.model';
import { Database, get, push, ref, set } from 'firebase/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private db: AngularFireDatabase) {}
createEvent(event: CustomEvent) {
return this.db.list('/eventPage').push(event);
// return eventsRef.push(event); // Push and return the reference with ID
}

 getEventById(id: string): Observable<CustomEvent | null> {
      return this.db.object<CustomEvent>(`/events/${id}`).valueChanges();
        }
 getEvents() {
return this.db.list<CustomEvent>('/eventPage').valueChanges();
  }
  //   const newEventRef = push(eventRef); // Generate a unique key for the new event
  //   return set(newEventRef, event); // Store the event in the database
  // }
  // // Retrieve all events
  // getEvents(): Promise<CustomEvent[]> {
  //   return this.db.list<CustomEvent>('eventPage').valueChanges().toPromise().then((events) => {
  //     return events || []; // Return an empty array if events is undefined
  //   });
  // }
  // getEventById(eventId: string) {
  //   throw new Error('Method not implemented.');
  // }
  //  constructor(private db: Database) {}
  // createEvent(event: CustomEvent) {
  //   return this.db.list('/eventPage').push(event);
  // }

  // getEventss() {
  //   return this.db.list<CustomEvent>('/eventPage').valueChanges();
  // }
  // Create and store an event
  //  events: CustomEvent[] = [];

  // constructor(private eventService: EventService,private db: AngularFireDatabase) {}
  //  createEvent(event: CustomEvent): Promise<void> {
  //   const eventRef = ref(this.db.database, 'eventPage/'); // Firebase Database reference
  //   const newEventRef = push(eventRef); // Generate a unique key for the new event
  //   return set(newEventRef, event); // Store the event in the database
  // }

  // // Retrieve all events
  // getEvents(): Promise<CustomEvent[]> {
  //   return this.db.list<CustomEvent>('eventPage').valueChanges().toPromise().then((events) => {
  //     return events || []; // Return an empty array if events is undefined
  //   });
  // }

  //  createEvent(event: CustomEvent) {
  //   return this.db.list('eventPage').push(event); // Push the event to the database
  // }

  // // Retrieve all events
  // getEvents() {
  //   return this.db.list<CustomEvent>('eventPage').valueChanges(); // Returns observable of events
  // }
  // Like an event
  // likeEvent(eventId: string): Promise<void> {
  //   const eventRef = ref(this.db.database, `eventPage/${eventId}`); // Reference to the specific event
  //   return get(eventRef).then(snapshot => {
  //     if (snapshot.exists()) {
  //       const eventData = snapshot.val();
  //       // Toggle the liked status or handle it as needed
  //       eventData.liked = !eventData.liked; // Toggle liked status
  //       return set(eventRef, eventData); // Update the event with the new liked status
  //     } else {
  //       throw new Error('Event not found');
  //     }
  //   });
  // }
  
  // ngOnInit() {
  //   this.loadEvents();
  // }

  // loadEvents() {
  //   this.eventService.getEvents().then(events => {
  //     this.events = events || []; // Load events or default to empty array
  //   }).catch(error => {
  //     console.error('Error loading events:', error);
  //   });
  // }

  // createNewEvent(newEvent: CustomEvent) {
  //   this.eventService.createEvent(newEvent).then(() => {
  //     console.log('Event created successfully!');
  //     this.loadEvents(); // Reload events after creation
  //   }).catch(error => {
  //     console.error('Error creating event:', error);
  //   });
  // }
//     createEvent(event: CustomEvent): Promise<void> { // Change parameter type to CustomEvent
//     const eventRef = ref(this.db.database, 'eventPage/');
//     const newEventRef = push(eventRef); // Generate a unique key
//     return set(newEventRef, event); // Store the event at the generated reference
//   }

//   // Retrieve all events
//   getEvents(): Promise<CustomEvent[]> {
//     const eventsRef = ref(this.db.database, 'eventPage/');
//     return get(eventsRef).then(snapshot => {
//       const events: CustomEvent[] = [];
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         // Transform the data into an array of CustomEvent
//         for (const key in data) {
//           if (data.hasOwnProperty(key)) {
//             events.push({ ...data[key], id: key }); // Spread operator to include the event data and add an id
//           }
//         }
//       }
//       return events; // Return the array of events
//     });
//   }
// //  private events: AppEvent[] = [
// //     { id: '1', name: 'Concert', description: 'Enjoy live music', date: '2024-01-01',liked:true },
// //     { id: '2', name: 'Art Gallery', description: 'Explore beautiful art', date: '2024-01-02',liked:true },
// //     // More events...
// //   ];

//   private likedEvents: CustomEvent[] = [];

//   // getEvents(): AppEvent[] {
//   //   return this.events;
//   // }

//   likeEvent(event: CustomEvent): void {
//     if (!this.likedEvents.find(e => e.eventName === event.eventName)) {
//       this.likedEvents.push(event);
//       event.liked = true; // Mark event as liked
//     }
//   }

//   getLikedEvents(): CustomEvent[] {
//     return this.likedEvents;
//   }
}
