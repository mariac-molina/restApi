import { Component,Input, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-objectifs',
  templateUrl: './objectifs.component.html',
  styleUrls: ['./objectifs.component.css']
})
export class ObjectifsComponent implements OnInit {

  private newAttribute: any = {};

  name: string = "";

  selectedEnjeux = [];
  selectedLeviers = [];

  objectifsFields = [];
  leviersFields = [];
  enjeusFields = [];

  private url = '';

  private apiURL = 'http://localhost:8000/logged/objectifs';
  private apiURLl = 'http://localhost:8000/logged/leviers';
  private apiURLe = 'http://localhost:8000/logged/enjeus';

  private apiURLeo = 'http://localhost:8000/logged/enjeuobjectifs';
  private apiURLol = 'http://localhost:8000/logged/objectifleviers';

  changeEnj(e, enj, obj){
    console.log("enj : " + enj.id + " + " + enj.EnjeuLibelle + " + " + enj.EnjeuDescription + " + " + enj.EnjeuEtat);
    // if(e.checked){
    let index = this.selectedEnjeux.map(function(e) { return e.EnjeuId; }).indexOf(enj.id);
    console.log("valueeeee : " + index);

    if( index != -1 ){
      this.selectedEnjeux.splice(index, 1);
    }
    else{
      this.selectedEnjeux.push({
        EnjeuId: enj.id,
        EnjeuLibelle: enj.EnjeuLibelle,
        EnjeuDescription: enj.EnjeuDescription,
        EnjeuEtat: enj.EnjeuEtat
      });
    }
    console.log(this.selectedEnjeux);
  }

  changeLev(e, lev, obj){
    console.log("lev : " + lev.id + " + " + lev.LevierLibelle + " + " + lev.LevierDescription);
    // if(e.checked){
    let index = this.selectedLeviers.map(function(e) { return e.LevierId; }).indexOf(lev.id);
    console.log("valueeeee : " + index);

    if( index != -1 ){
      this.selectedLeviers.splice(index, 1);
    }
    else{
      this.selectedLeviers.push({
        LevierId: lev.id,
        LevierLibelle: lev.LevierLibelle,
        LevierDescription: lev.LevierDescription
      });
    }
    console.log(this.selectedLeviers);
  }

  associateEnj(oId){
    var that = this;
    this.selectedEnjeux.forEach(function (value) {
      console.log("poueeeeeetttt : " + value.EnjeuId);
      that.postEnjeuObjectifs(oId, value.EnjeuId);
    });
  }//End associateEnj()

  associateLev(oId){
    var that = this;
    this.selectedLeviers.forEach(function (value) {
      console.log("poueeeeeetttt : " + value.LevierId);
      that.postObjectifLeviers(oId, value.LevierId);
    });
  }//End associateEnj()

  addFieldValueObj(name, form: NgForm) {
    this.onSubmit(form);
    this.name = name;
    this.newAttribute.push(this.name);
    this.newAttribute = {};
  }

  deleteFieldValueObj(index, name, objId) {
    name.splice(index, 1);
    console.log(objId);
    this.deleteObjectifs(objId);

  }

  constructor(public http: Http){
    this.getObjectifs();
    //this.getData();

  }

  ngOnInit() {
    this.getData(this.apiURL).subscribe((objectifsFields) => {
      this.objectifsFields = objectifsFields
    });

    this.getData(this.apiURLl).subscribe((leviersFields) => {
      this.leviersFields = leviersFields;
      console.log(leviersFields);
    });

    this.getData(this.apiURLe).subscribe((enjeusFields) => {
      this.enjeusFields = enjeusFields;
      console.log(enjeusFields);
    });
  }


  onSubmit(form: NgForm) {
    console.log (form.value);
    this.name = form.value;
    //this.postOrganismes()
    this.postObjectifs(form.value.newLibelleObj, form.value.newDescriptionObj);

  }

  onModif(form: NgForm, id) {
    console.log (form.value)
    // console.log("this id = " + id);
    this.name = form.value
    //this.postOrganismes()
    //this.putEnjeux(id, form.value.newLibelleEnj, form.value.newDescriptionEnj);
    location.reload();
  }

  getData(url){

    this.url = url;
    let path = this.url + '/';
    return this.http.get(path)
    .map((res: Response) => res.json());
  }//End getData()

  getObjectifs(){
    return this.getData(this.apiURL).subscribe(data => {
      console.log(data);
      //console.log(data[0]);
      //this.data = data
      //result = data;
      //return result;
      return data;
    });
  }//End getOrganismes()

  deleteObjectifs(objId){
    let path = this.apiURL + '/' + objId;
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

    }//End deleteOrganismes()

    postObjectifs(oLib, oDes){

      let path = this.apiURL + "/";

      this.http.post(path, {
        ObjectifLibelle : oLib,
        ObjectifDescription : oDes
      })
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body", val);
          console.log("iiiddd : " + val.json().id);
          this.associateEnj(val.json().id);
          this.associateLev(val.json().id);
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
      }//End postOrganismes()

      postEnjeuObjectifs(oId, eId){
        console.log("insiiiiiiiiiiiiiideeeeeeeee");
        let path = this.apiURLeo + "/";

        this.http.post(path, {
          ObjectifId : oId,
          EnjeuId : eId
        })
        .subscribe(
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

        postObjectifLeviers(oId, lId){
          console.log("levieeeeers");
          let path = this.apiURLol + "/";

          this.http.post(path, {
            ObjectifId : oId,
            LevierId : lId
          })
          .subscribe(
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

          putObjectifs(id, oLib, oDes, oLev){
            let path = this.url + '/' + id;
            this.http.put(path, {
              ObjectifLibelle : oLib,
              ObjectifDescription : oDes,
              LevierLibelle : oLev
            })
            .subscribe(
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
            }

          }
