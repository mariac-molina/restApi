import { Component,Input, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-organismes',
  templateUrl: './organismes.component.html',
  styleUrls: ['./organismes.component.css']
})
export class OrganismesComponent implements OnInit {

  private apiURL = 'http://localhost:8000/logged/organismes';
  data: any = {};

  name: string = "";

  public organismes = [];

  constructor(public http: Http){
     this.getOrganismes();
     this.getData();
  }//End constructor()

  ngOnInit() {
    this.getData().subscribe((organismes) => {
              this.organismes = organismes
          }); //This makes data accessible from html template using {{ param }}
  }

  onSubmit(form: NgForm) {
     console.log (form.value)
     this.name = form.value

     this.postOrganismes(form.value.nom, form.value.adresse, form.value.ville, form.value.pays);
  }

  onModif(form: NgForm, id, name, address, city, country) {
     console.log (form.value)
     console.log("this id = " + id);

     this.putOrganismes(id, name, address, city, country);
     location.reload();
  }

   getData(){
    let path = this.apiURL + '/';
    return this.http.get(path)
      .map((res: Response) => res.json());
  }//End getData()

  getOrganismes(){
    return this.getData().subscribe(data => {
      console.log(data);
      this.data = data;

      return data;
    });
  }//End getOrganismes()

  deleteOrganismes(orgId){
    let path = this.apiURL + '/' + orgId;

    return this.http.delete(path).subscribe(
      (val) => {
        console.log("DELETE call successful, value returned in body", val);
        this.ngOnInit();
      },
      Response => {
        console.log("DELETE call in error", Response);
        console.log("the freaking path is :  " + path)
        this.ngOnInit();
      },
      () => {
        console.log("The DELETE observable is now completed");
        this.ngOnInit();

      });
  }//End deleteOrganismes()

  postOrganismes(oLib, oAdr, oVille, oPays){
    let path = this.apiURL + "/";

    this.http.post(path, {
    	OrganismeLibelle : oLib,
    	OrganismeAdresse : oAdr,
    	OrganismeVille : oVille,
    	OrganismePays : oPays
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
  }//End postOrganismes()

  putOrganismes(id, oLib, oAdr, oVille, oPays){
    let path = this.apiURL + '/' + id;

    this.http.put(path, {
    	OrganismeLibelle : oLib,
    	OrganismeAdresse : oAdr,
    	OrganismeVille : oVille,
    	OrganismePays : oPays
    }).subscribe(
        (val) => {
            console.log("UPDATE call successful value returned in body",val);
            this.ngOnInit();

        },
        Response => {
            console.log("UPDATE call in error", Response);
            this.ngOnInit();

        },
        () => {
            console.log("The UPDATE observable is now completed.");
            this.ngOnInit();
        });

  }//End putOrganismes()

 }
