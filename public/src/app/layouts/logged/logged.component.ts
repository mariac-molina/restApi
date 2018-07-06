import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  user: User = new User();

  ngOnInit() {
  }

  onDisconnect(): void{
    this.auth.logout(this.user)
    .then((user) => {
      console.log("onDisconeeeeeeect");
      localStorage.removeItem('token');
      // console.log(user.json());
      this.router.navigateByUrl('');
    }).catch((err) => {
      console.log(err);
    });

  }//End onDisconnect()
  //
  //
  // onLogin(): void{
  //   this.auth.login(this.user)
  //   .then((user) => {
  //     localStorage.setItem('token', user.json().token);
  //     console.log(user.json());
  //     this.router.navigateByUrl('admin');
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }
}
