import { Injectable } from '@angular/core';
import { itCreateEvent } from '../../interface/itCreateEvent';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CreateEventService {

  private onlineURL = 'https://eventive-55d33-default-rtdb.firebaseio.com/onlineData.json';
  private offlineURL = 'https://eventive-55d33-default-rtdb.firebaseio.com/offlineData.json';

  constructor(private http: HttpClient) {}

  // Return the observable from the HTTP POST call
  uploadCreatingOnEvent(onlineData: itCreateEvent){
    return this.http.post<any>(this.onlineURL, onlineData);
  }

  uploadCreatingOffEvent(offlineData: itCreateEvent){
    return this.http.post<any>(this.offlineURL, offlineData);
  }
}
export type {itCreateEvent };