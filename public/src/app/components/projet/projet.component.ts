import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  private apiURL = 'http://localhost:8000/logged';
  data : any = {};

  name : string = "";

  public projet = [];

  constructor(private http: Http) {
      this.getProjet();
      this.getData();
  }

  ngOnInit() {
    this.getData().subscribe( (projet) => {
        this.projet = projet
    });
  }

  onSubmit(form: NgForm, id){
    console.log(form.value);
    this.name = form.value;
    this.postProjet(form.value.nomOrg);
  }

  onModif(form: NgForm, id){
    console.log(form.value);
    console.log("this id = " + id);
    this.name = form.value;

    this.putProjet(id, form.value.nomOrg);
    location.reload();
  }

  getData(){
    let path = this.apiURL + '/';
    return this.http.get(path).map((res: Response) => res.json());
  }

  getProjet(){
    return this.getData().subscribe(data => {
      console.log(data);
      this.data = data;

      return data;
    });
  }

  dalataProjet(projId){
    let path = this.apiURL + '/' + projId;

    return this.http.delete(path).subscribe(
      (val) => {
        console.log("DELETE call successful, value returned in body", val);
        this.ngOnInit();
      },
      Response => {
        console.log("DELETE call in error", Response);
        this.ngOnInit();
      },
      () => {
        console.log("The DELETE observable is now completed");
        this.ngOnInit();
      });
  }

  postProjet(oLib){
    let path = this.apiURL + "/";

    this.http.post(path, {
      OrganismeLibelle : oLib
    }).subscribe(
      (val) => {
        console.log("POST call successful value returned in body", val);
        this.ngOnInit();
      },
      Response => {
        console.log("POST call in error");
        this.ngOnInit();
      },
      () => {
        console.log("The POST observable is now completed");
        this.ngOnInit();
      });
  }

  putProjet(id, oLib){
    let path = this.apiURL + '/' + id;

    this.http.post(path, {
      OrganismeLibelle : oLib
    }).subscribe(
      (val) => {
        console.log("POST call successful value returned in body", val);
        this.ngOnInit();
      },
      Response => {
        console.log("POST call in error", Response);
        this.ngOnInit();
      },
      () => {
        console.log("The POST observable is now completed");
        this.ngOnInit();
      }
    )
  }

}
