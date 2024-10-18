import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:boolean =false;
  constructor(){}
  
  login(){
    this.loggedIn=true;
  }
  logout(){
    this.loggedIn=false;
  }
  isAuthenticated(){
    return this.loggedIn;
  }
}
