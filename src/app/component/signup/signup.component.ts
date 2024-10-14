import { Component } from '@angular/core';
import { USERModel } from './userModel';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
userModel=new USERModel(
  '',
  '',
  '',
  '',
  ''
);
constructor(private userService :UserService){}
ngOnInit(){}
signUp(form: any){
// this.userService.addUser(this.userModel).subscribe({
//   next:(data)=> console.log(data),
// });
console.log(form)
}
// onSubmit(form){
//   // this.userService.addUser(this.userModel).subscribe({
//   //   next:(data)=> console.log(data),
//   //   error: (error) => console.log(error),
    
//   // });
  
// }
}
