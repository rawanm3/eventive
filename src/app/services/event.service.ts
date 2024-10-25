import { Injectable } from '@angular/core';
import { CustomEvent } from '../interfaces/event.model';
import { Database, get, push, ref, set } from 'firebase/database';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  likeEvent(event: any) {
    throw new Error('Method not implemented.');
  }
    private eventsRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.eventsRef = db.list('eventPage');
  }

  
 createEvent(eventData: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const newEventRef = this.db.list('/eventPage').push(eventData);
    newEventRef
      .then(() => {
        resolve(newEventRef); // Resolve the promise with the reference
      })
      .catch(reject); // Reject the promise in case of an error
  });
}


  // Method to retrieve all events
  getAllEvents(): Observable<any[]> {
    return this.db.list('/eventPage').valueChanges();
  }

  // Method to retrieve the latest event
  getLatestEvent(): Observable<any> {
    return this.db.list('/eventPage', ref => ref.orderByKey().limitToLast(1)).valueChanges();
  }
}

