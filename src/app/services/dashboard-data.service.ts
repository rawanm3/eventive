import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { itCreateEvent } from '../../interface/itCreateEvent';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
 
  constructor(private evt : AngularFirestore) {}

  // ADD EVENTS
  addEvent(Eventive: itCreateEvent){
    Eventive.id = this.evt.createId();
    return this.evt.collection('/create-an-event').add(Event)
  }
  // ADD ALL EVENTS
  addAllevents(): Observable<any>{
    return this.evt.collection('/create-an-event').snapshotChanges();
  }

  // DELETE EVENTS
  deleteEvent(Eventive: itCreateEvent){
    return this.evt.doc('/create-an-event/'+Eventive.id).delete();
  }

  // UPDATE EVENTS
  updateEvent(Eventive: itCreateEvent){
    this.deleteEvent(Eventive);
    this.addEvent(Eventive);
  }

}
