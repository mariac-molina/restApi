import { Component,Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-enjeux',
  templateUrl: './enjeux.component.html',
  styleUrls: ['./enjeux.component.css']
})
export class EnjeuxComponent implements OnInit {

  private newAttribute: any = {};
  public url = 'http://localhost:8000/logged/enjeus';

  name: string = "";

  public enjeuxFields = [];

  public organismes =[];

  private apiURL = 'http://localhost:8000/logged/enjeus';
  private apiURLo = 'http://localhost:8000/logged/organismes';

  addFieldValueEnj(name, form: NgForm) {
    this.onSubmit(form);
    this.name = name;
    this.newAttribute.push(this.name);
    this.newAttribute = {};
  }

  deleteFieldValueEnj(index, name, enjId) {
    name.splice(index, 1);
    console.log(enjId);
    this.deleteEnjeux(enjId);
  }

  constructor(public http: Http){

    //this.getEnjeux();
    this.getData();
  }//End constructor()

  ngOnInit() {
    this.getData().subscribe((enjeuxFields) => {
      this.enjeuxFields = enjeuxFields;
    }); //This makes data accessible from html template using {{ param }}

    this.getData().subscribe((organismes) => {
      this.organismes = organismes;
    }); //This makes data accessible from html template using {{ param }}
  }

  onSubmit(form: NgForm) {
    console.log (form.value);
    this.name = form.value;
    this.postEnjeux(form.value.newLibelleEnj, form.value.newDescriptionEnj);
  }

  valide(form: NgForm) {
    console.log (form.value);
    this.name = form.value;
  }

  onModif(form: NgForm, id) {
    console.log (form.value);
    this.name = form.value;
    this.putEnjeux(id, form.value.newLibelleEnj, form.value.newDescriptionEnj);
    location.reload();
  }

  getData(){
    //this.url = url;
    let path = this.url + '/';
    return this.http.get(path)
    .map((res: Response) => res.json());
  }//End getData()

  // getEnjeux(){
  //   return this.getData().subscribe(data => {
  //     console.log(data);
  //     //console.log(data[0]);
  //     this.data = data
  //     //result = data;
  //     //return result;
  //     return data;
  //   });
  // }//End getEnjeux()

  deleteEnjeux(enjId){
    let path = this.apiURL + '/' + enjId;

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
    }//End deleteEnjeux()

  postEnjeux(eLib, eDes){
    let path = this.apiURL + "/";

    this.http.post(path, {
      EnjeuLibelle : eLib,
      EnjeuDescription : eDes
    }).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",val);
        this.ngOnInit();
      },
      Response => {
        console.log("POST call in error", Response);
        this.ngOnInit();
      },
      () => {
        console.log("The POST observable is now completed.");
        this.ngOnInit();
      });
    }//End postEnjeux()

    putEnjeux(id, eLib, eDes){
      let path = this.apiURL + '/' + id;

      this.http.put(path, {
        EnjeuLibelle : eLib,
        EnjeuDescription : eDes
      }).subscribe(
        (val) => {
          console.log("POST call successful value returned in body",val);
          this.ngOnInit();
        },
        Response => {
          console.log("POST call in error", Response);
          this.ngOnInit();
        },
        () => {
          console.log("The POST observable is now completed.");
          this.ngOnInit();
        });
      }//End putEnjeux()

  }
