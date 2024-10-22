import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authService: any;
  router: any;

  loggedIn:boolean =false;
  cuserModel: any;

   constructor(private afAuth: AngularFireAuth) {}
 async logout() {
    try {
      await this.afAuth.signOut();
      localStorage.removeItem('user'); // Clear user data from local storage
      this.router.navigate(['/login']); // Navigate to login page
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user'); // Check if user is in local storage
  }

  get user() {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null; // Parse user data or return null
  }

 
async login(form: NgForm) {
  if (form.invalid) return;

  try {
    const userCredential = await this.afAuth.signInWithEmailAndPassword(
      this.cuserModel.email,
      this.cuserModel.password
    );

    if (userCredential.user) {
      console.log('User logged in:', userCredential);
      // Store user data in local storage
      const userData = {
        name:userCredential.user.displayName,
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        // Add any other user properties you want to store
      };
      localStorage.setItem('user', JSON.stringify(userData));

      // Navigate to home or any other page
      this.router.navigate(['/home']);
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Login error:', error.message);
      alert(error.message); // Show error message
    } else {
      console.error('Login error:', error);
      alert('An unknown error occurred. Please try again.');
    }
  }
}
  async register(email: string, password: string): Promise<void> {
    const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user; // This may be null

    // if (user) {
    //   const userData = {
    //     uid: user.uid,
    //     email: user.email,
    //     displayName: user.displayName, // Use optional chaining if needed
    //   };
    //   localStorage.setItem('user', JSON.stringify(userData)); // Store user data in local storage
    // } else {
    //   throw new Error('User credential is null');
    // }
  }
}
