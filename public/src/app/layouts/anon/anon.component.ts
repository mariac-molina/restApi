import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anon',
  templateUrl: './anon.component.html',
  styleUrls: ['./anon.component.css']
})
export class AnonComponent implements OnInit {

  test: string = 'this is only a test!!!!';
  user: User = new User();

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {

  }

  onLogin(): void{
    this.auth.login(this.user)
    .then((user) => {
      localStorage.setItem('token', user.json().token);
      console.log(localStorage);
      console.log(user.json());
      this.router.navigateByUrl('admin');
    }).catch((err) => {
      console.log(err);
    });
  }
}
