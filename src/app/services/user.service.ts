import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USERModel } from '../component/signup/userModel';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

// private baseURL: string='https://eventive-project-default-rtdb.firebaseio.com/users.json';
//   constructor(private http : HttpClient) { }
//     addUser(user : USERModel){
//     return this.http.post<any>(this.baseURL, user);
//   }
private baseURL: string = 'https://eventive-55d33-default-rtdb.firebaseio.com/users.json'; // Name of the collection

  constructor(private  http:  HttpClient) {}

  addUser(user: USERModel){
    this.addUser(user);{
    return this.http.post<any>(this.baseURL, user);
  }
}}