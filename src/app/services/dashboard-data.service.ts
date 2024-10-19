import { Injectable } from '@angular/core';
import { itDashboard } from '../../interface/itDashboard';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
 
  private apiURL = '/data/offlineData.json'
  private apiURL2 = '/data/onlineData.json'
  constructor(private http: HttpClient) { }
  
  getOffEvents():Observable<itDashboard[]> {
    return this.http.get<itDashboard[]>(this.apiURL).pipe(
      catchError((err)=>{
        return throwError(()=>err.message || 'Internal server error')
      })
    )
  }
  getOnEvents() :Observable<itDashboard[]> {
    return this.http.get<itDashboard[]>(this.apiURL2).pipe(
      catchError((err)=>{
        return throwError(()=>err.message || 'Internal server error')
      })
    )
  }
}
