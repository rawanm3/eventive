import { Component} from '@angular/core';
import { USERModel } from './userModel';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../auth/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})

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


  constructor(private auth: AngularFireAuth) {}
signIn() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailPattern.test(this.user.email)) {
    alert('Please enter a valid email address.');
    return;
  }

  this.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
    .then(userCredential => {
      console.log('Login successful', userCredential);
    })
    .catch((error) => {
      console.error('Login error:', error);
      alert(`Error: ${error.message}`);
    });
}

}
// import { Component } from '@angular/core';

// import { Router } from '@angular/router';
// import { AuthService } from '../../auth/auth/auth.service';
// import { AngularFireAuth } from '@angular/fire/compat/auth';


// @Component({
//   selector : 'app-login-page',
// templateUrl: './login-page.component.html',
//   styleUrl: './login-page.component.scss'
  
// })
// export class LoginPageComponent {
// //   email: string = '';
// //   password: string = '';
// //   auth: any;
// //   user: any;

// //   constructor(private afAuth: AngularFireAuth, private router: Router) {}

// //   async onSubmit() {
// //     try {
// //       const userCredential = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
// //       console.log('Logged in:', userCredential);
// //       this.router.navigate(['/dashboard']); // Navigate to a protected route
// //     } catch (error) {
// //       console.error('Login error:', error);
// //       // Optionally display an error message here
// //     }
// //   }
 
// //   signIn() {
// //     this.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
// //       .then((userCredential: any) => {
// //         // Signed in
// //         console.log('Login successful', userCredential);
// //         // Redirect or perform further actions
// //       })
// //       .catch((error: { message: any; }) => {
// //         console.error('Login error:', error);
// //         alert(`Error: ${error.message}`); // Show a user-friendly error message
// //       });
// //   }
// // }
// //     email: string = '';
// //   password: string = '';
// //   error: string | null = null;
// // user: any;

// //   constructor(private authService: AuthService, private router: Router) {}
// // async onLogin() {
// //   try {
// //     await this.authService.login(this.email, this.password);
// //     this.router.navigate(['/home']); // Redirect to the home page after login
// //   } catch (err: unknown) {
// //     if (err instanceof Error) {
// //       this.error = err.message; // Access the message property safely
// //     } else {
// //       this.error = 'An unexpected error occurred.';
// //     }
// //   }
// // }



