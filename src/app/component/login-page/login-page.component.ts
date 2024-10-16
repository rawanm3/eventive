import { Component, OnInit } from '@angular/core';
import { USERModel } from './userModel';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  userModel = new USERModel('', '');

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  // دالة تسجيل الدخول المعدلة لإضافة المستخدم إلى Firebase
  login(form: any) {
    this.userService.addUser(this.userModel).subscribe({
      next: () => {
        console.log('User added successfully');
      },
      error: (err) => {
        console.error('Error adding user:', err);
      }
    });
  }
}
