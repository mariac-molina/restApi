import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class LoginRedirect implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    console.log("in LoginRedirect");
    if(localStorage.getItem('token')){
      this.router.navigateByUrl('/admin');
      console.log("token exists, continue");
      return false;
    }
    else{
      return true;
      console.log("token does not exist");
    }
  }


}
