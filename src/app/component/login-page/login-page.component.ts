import { Component, OnInit } from '@angular/core';
import { USERModel } from './userModel';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../auth/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
// export class LoginPageComponent implements OnInit {

//   userModel = new USERModel('', ''
//   );

export class LoginPageComponent {
userModel=new USERModel(
  '',
  '',
  '',
  '',
  ''
);
  user = { email: '', password: '' };
  error: string | null = null;
loginForm: any;


  constructor(private auth: AngularFireAuth ,private router: Router) {}
signIn() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailPattern.test(this.user.email)) {
    alert('Please enter a valid email address.');
    return;
  }

  this.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
    .then(userCredential => {
      console.log('Login successful', userCredential);
     const userData = {
        name: userCredential.user?.displayName,
        uid: userCredential.user?.uid, // Use optional chaining
        email: userCredential.user?.email,
      };
      localStorage.setItem('user', JSON.stringify(userData))
      this.router.navigate(['/home']);
    })
    .catch((error) => {
      console.error('Login error:', error);
      alert(`Error: ${error.message}`);
    });
}
googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    this.auth.signInWithPopup(provider)
      .then(result => {
        console.log('Google Sign-In successful', result);
       if (result.user) {
        const userData = {
          name:result.user.displayName,
          email: result.user.email,
          uid: result.user.uid,
        };
      
        // Store user data in local storage
        localStorage.setItem('user', JSON.stringify(userData));
      }
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.error('Google Sign-In error:', error);
        this.error = error.message; // Show error message
      });
  }
}