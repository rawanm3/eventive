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
    private eventsRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.eventsRef = db.list('eventPage');
  }

  createEvent(eventData: any): Promise<any> {
    // Push event data and return the reference
    return this.eventsRef.push(eventData).then((eventRef) => {
      return eventRef; // Return the reference
    });
  }

  getEvents() {
    return this.db.list('eventPage').valueChanges();
  }
}
