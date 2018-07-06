import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  private orgURL: string = 'http://localhost:8000/logged/organismes';

  private headers: Headers = new Headers({'Content-Type' : 'application/json'});

  constructor(private http: Http) { }

  getOrgaData(): Promise<any>{
    console.log("getting orga data");
    let url: string =
  }
}
