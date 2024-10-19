import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logout() {
    throw new Error('Method not implemented.');
  }
  user: any;
  isLoggedIn() {
    throw new Error('Method not implemented.');
  }
  login(email: string, password: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private auth: Auth) {}

  register(email: string, password: string): Observable<any> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }
}
