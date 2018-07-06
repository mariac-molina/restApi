import { Component,Input, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fonctionnalites',
  templateUrl: './fonctionnalites.component.html',
  styleUrls: ['./fonctionnalites.component.css']
})

export class FonctionnalitesComponent implements OnInit {

  private newAttribute: any = {};

  name: string = "";

  public fonctionFields=[];
  public objectifsFields = [];

  selectedObjectifs = [];

  private url = '';

  private apiURL = 'http://localhost:8000/logged/fonctionnalites';
  private apiURLo = 'http://localhost:8000/logged/objectifs';

  private apiURLof = 'http://localhost:8000/logged/objectiffonctionnalites';

  constructor(public http: Http){
    // this.getFonction();
    // this.getData();
  }//End constructor()


  ngOnInit() {
    this.getData(this.apiURL).subscribe((fonctionFields) => {
      this.fonctionFields = fonctionFields;
      console.log(fonctionFields);
    }); //This makes data accessible from html template using {{ param }}

    this.getData(this.apiURLo).subscribe((objectifsFields) => {
      this.objectifsFields = objectifsFields;
      console.log(objectifsFields);
    });
  }

  addFieldValueFonc(name, form: NgForm) {
    this.onSubmit(form),
    this.name = name;
    this.newAttribute.push(this.name);
    this.newAttribute = {};
  }//End addFieldValueFonc()

  deleteFieldValueFonc(index, name, Id) {
    name.splice(index, 1);
    console.log(Id);
    this.deleteFonction(Id);
  }//End deleteFieldValueFonc

  changeObj(e, obj, fonc){
    console.log("obj : " + obj.id + " + " + obj.ObjectifLibelle + " + " + obj.ObjectifDescription);
    // if(e.checked){
    let index = this.selectedObjectifs.map(function(e) { return e.ObjectifId; }).indexOf(obj.id);
    console.log("valueeeee : " + index);

    if( index != -1 ){
      this.selectedObjectifs.splice(index, 1);
    }
    else{
      this.selectedObjectifs.push({
        ObjectifId: obj.id,
        ObjectifLibelle: obj.ObjectifLibelle,
        ObjectifDescription: obj.ObjectifDescription
      });
    }
    console.log(this.selectedObjectifs);
  }

  associateObj(fId){
    var that = this;
    this.selectedObjectifs.forEach(function (value) {
      console.log("poueeeeeetttt : " + value.ObjectifId);
      that.postObjectifFonctionnalites(fId, value.ObjectifId);
    });
  }//End associateEnj()

  onSubmit(form: NgForm) {
    console.log (form.value);
    this.name = form.value;
    this.postFonction(form.value.newLibelleFonc, form.value.newDescriptionFonc);
  }

  getData(url){

    this.url = url;
    let path = this.url + '/';
    return this.http.get(path)
    .map((res: Response) => res.json());
  }//End getData()

  getFonction(){
    return this.getData(this.apiURL).subscribe(data => {
      console.log(data);
      //  this.data = data;

      return data;
    });
  }//End getFonction()

  deleteFonction(Id){
    let path = this.apiURL + '/' + Id;

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
    }//End deleteFonction()

    postFonction(fLib, fDes){
      let path = this.apiURL + "/";

      this.http.post(path, {
        FonctionnaliteLibelle : fLib,
        FonctionnaliteDescription : fDes
      }).subscribe(
        (val) => {
          console.log("POST call successful value returned in body",val);
          console.log("iiiddd : " + val.json().id);
          this.associateObj(val.json().id);
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
      }//End postFonction()

      postObjectifFonctionnalites(fId, oId){
        console.log("fonctionnalites");
        let path = this.apiURLof + "/";

        this.http.post(path, {
          ObjectifId : oId,
          FonctionnaliteId : fId
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
        }//End postEnjeuObjectifs()

        putFonction(id, fLib, fDes){
          let path = this.apiURL + '/' + id;

          this.http.put(path, {
            FonctionnaliteLibelle : fLib,
            FonctionnaliteDescription : fDes
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
          }//End putFonction()
        }
