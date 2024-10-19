import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { CanActivate, CanActivateChild, CanActivateChildFn, CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd {
  constructor(private authService :AuthService, private router:Router) { }
  // canActivate(): boolean| Observable<boolean> |Promise<boolean> {
  //   if(this.authService.isAuthenticated()){
  //     return true;
  //   }else{
  //     this.router.navigate(['/login']);
  //     return false ;
  //   }
  }
  // canActivateChild(): boolean| Observable<boolean> |Promise<boolean> {
  //   return this.canActivate();
  // }

// export const AuthGaurdGaurd :CanActivateFn = (route ,state)=>{
//   return inject(AuthGaurd).canActivate();
// };
// export const AuthChildGaurd :CanActivateChildFn = (route ,state)=>{
//   return inject(AuthGaurd).canActivateChild();
// };

