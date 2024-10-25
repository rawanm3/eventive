// import { Component } from '@angular/core';
// import { USERModal } from './usermodal';
// import { UserService } from '../../services/user.service';
import { Component } from '@angular/core';
import { USERModal } from './usermodal';
import { AuthService } from '../../auth/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
import firebase from 'firebase/compat/app';
import { User } from 'firebase/auth';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
templateUrl:'./signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
userModal=new USERModal(
  '',
  '',
  '',
  '',
  '',
  ''
);
// constructor(private userService :UserService){}
// onSubmit(){
//   this.userService.addUser(this.userModal).subscribe({
//     next:(data)=> console.log(data),
//     error: (error) => console.log(error),
    
//   });
// }
//   constructor(private userService: UserService, private authService: AuthService) {}

// onSubmit() {
//   this.authService.register(this.userModal.email, this.userModal.password).subscribe({
//     next: async (userCredential) => {
//       const userId = userCredential.user.uid;
//       const userWithUid = new USERModal(userId, this.userModal.name, this.userModal.lastName, this.userModal.email, this.userModal.password, this.userModal.RepeatPassword);
      
//       try {
//         await this.userService.addUser(userWithUid); // Use await for the Promise
//         console.log('User data saved successfully');
//       } catch (error) {
//         console.log('Error saving user data:', error);
//       }
//     },
//     error: (error) => console.log('Registration error:', error)
//   });
// }

//   constructor(private afAuth: AngularFireAuth, private router: Router) {}

 
//   async onSubmit(form: NgForm) {
//   if (form.invalid) return;

//   try {
//     const userCredential = await this.afAuth.createUserWithEmailAndPassword(
//       this.userModal.email,
//       this.userModal.password
//     );
//     console.log('User registered:', userCredential);
//     this.router.navigate(['/login']);
//   } catch (error: unknown) {
//     // Type guard to ensure error is of type FirebaseError
//     if (error instanceof Error) {
//       console.error('Signup error:', error.message);
//       alert(error.message); // Show error message
//     } else {
//       console.error('Signup error:', error);
//       alert('An unknown error occurred. Please try again.');
//     }
//   }
// }

  cuserModel = {
    email: '',
    password: '',
  };
user: any;
  auth: any;
  error: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

 async onSubmit(form: NgForm) {
  if (form.invalid) return;

  try {
    const userCredential = await this.afAuth.createUserWithEmailAndPassword(
      this.userModal.email,
      this.userModal.password
    );
    console.log('User registered:', userCredential);
    Swal.fire('Success', 'Registration successful! You can now log in.', 'success');
    this.router.navigate(['/login']);
  } catch (error: unknown) {
    // Type guard to ensure error is of type FirebaseError
    if (error instanceof Error) {
      console.error('Signup error:', error.message);
      Swal.fire({
       icon: "error",
        title: "Oops...",
       text: error.message,
       });
    } else {
      console.error('Signup error:', error);
      Swal.fire({
       icon: "error",
        title: "Oops...",
       text: "An unknown error occurred. Please try again.",
       });
    }
  }
}
googleSignUp() {
  const provider = new firebase.auth.GoogleAuthProvider();

  this.afAuth.signInWithPopup(provider)
    .then((result: any) => {
      console.log('Google Sign-Up successful', result);
      // Handle successful sign-up, e.g., save user info
        
        this.router.navigate(['/login']);
    })
    .catch((error: { message: any; }) => {
      console.error('Google Sign-Up error:', error);
      Swal.fire({
       icon: "error",
        title: "Oops...",
       text:this.error = error.message ,
       });
    });
}


}

