import { Injectable } from '@angular/core';
import { itDashboard } from '../../interface/itDashboard';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
 
  private apiURL = 'https://eventive-55d33-default-rtdb.firebaseio.com/offlineData.json';
  private apiURL2 = 'https://eventive-55d33-default-rtdb.firebaseio.com/onlineData.json';

  constructor(private http: HttpClient) { }

   addOnlineEvent(onEvents :itDashboard){
 return this.http.post<any>(this.apiURL2,onEvents)
 }
  addOfflineEvent(offEvents :itDashboard){
    return this.http.post<any>(this.apiURL,offEvents)
    }

}
