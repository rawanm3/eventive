import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USERModal } from '../component/signup/usermodal';
import { Observable } from 'rxjs';
import { child, Database, get, ref, set } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { USERModel } from '../component/login-page/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private baseURL: string = 'https://eventive-55d33-default-rtdb.firebaseio.com/users.json'; 
  //   constructor(private  http:  HttpClient) {}
  //   addUser(user: USERModal){
  //     return this.http.post<any>(this.baseURL, user);
 

// private baseURL: string = 'https://eventive-55d33-default-rtdb.firebaseio.com/users.json'; 

//   constructor(private  http:  HttpClient) {}

//   addUser(user: USERModal){
//     return this.http.post<any>(this.baseURL, user);
 
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {}

  // Example method to register a user
  async register(email: string, password: string) {
    const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    // Optionally save user data to database
    return this.db.list('users').push({ uid: userCredential.user?.uid, email });
  }}