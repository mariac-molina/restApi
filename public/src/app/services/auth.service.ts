import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from '../models/user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private BASE_URL: string = 'http://localhost:8000/auth/login';
  private ACCESS_URL: string = 'http://localhost:8000/logged';
  private ANON_URL: string = 'http://localhost:8000/disconnect';
  private headers: Headers = new Headers({'Content-Type' : 'application/json'});


  test(): string {
    return 'working!!!!!!!!!!!!!!';
  }

  constructor(private http: Http) { }

  login(user): Promise<any>{
    console.log("logiiiiiiiiiiing");
    let url: string = `${this.BASE_URL}`;
    return this.http.post(url, user, { headers: this.headers }).toPromise();
  }//End login()

  register(user): Promise<any>{
    console.log("registeriiiiiiiiiiing");
    let url: string = `${this.BASE_URL}/register`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }//End register()

  logout(user): Promise<any>{
    console.log("loggingoooooouuuuuuuuut");
    let url: string = `${ this.ANON_URL }`;
    let headers: Headers = new Headers({'Content-Type' : 'application/json'});

    return this.http.get(url, {headers: headers}).toPromise();
  }//End logout()

  ensureAuthenticated(token): Promise<any>{
    let url: string = `${ this.ACCESS_URL }`;
    console.log("inside ensureAuth");
    let headers: Headers = new Headers({
      'Content-Type' : 'application/json',
       Authorization : `Bearer ${ token }`
    });

    return this.http.get(url, {headers: headers}).toPromise();
  }//End ensureAuthenticated()
}
