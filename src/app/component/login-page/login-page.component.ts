import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { USERModel } from './userModel';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})

export class LoginPageComponent {
// ngOnInit(): void {
  
// }
userModel=new USERModel(
  '',
  ''
);

// email:string='';
// password :string='';
// constructor(private auth : AuthService){}

// login(){
//   if(this.email == ''){
//     alert('please enter email ');
//     return;
//   }
//   if(this.password == ''){
//     alert('please enter password ');
//     return;
//   }
//   this.auth.login(this.email,this.password);
//   this.email='';
//   this.password='';
// }
////////////////////////////////////////////
constructor(private userService :UserService){}
// onSubmit(){
//   this.userService.addUser(this.userModel).subscribe({
//     next:(data: any)=> console.log(data),
//     error: (error: any) => console.log(error),
    
//   });}
}

