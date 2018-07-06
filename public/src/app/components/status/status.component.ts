import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    console.log("storageeeeeeeeeeee" + localStorage);

    if(token){
      this.auth.ensureAuthenticated(token).then((user) => {
        console.log(user.json());
        console.log("pouet");
        this.isLoggedIn = true;
      }).catch((err) => {
        console.log(err);
      });
    }

  }

}
