import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { USERModel } from './userModel';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})

export class LoginPageComponent {
userModel=new USERModel(
  'RAWAN',
  '012589',
  'rawan@gmail.com',
  '256580',
  false
);
}
