import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()

export class EnsureAuthenticated implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean{
    console.log("in EnsureAuthenticated");
    if(localStorage.getItem('token')){
      console.log("token exists, continue");
      return true;
    }
    else{
      this.router.navigateByUrl('');
      console.log("token does not exist");
      return false;
    }
  }
}
