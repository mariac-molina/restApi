import { Component,Input, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  private newAttribute: any = {};
  //  private objectifs: any = {};

  addFieldValueSol(name, form: NgForm) {
    this.onSubmit(form);
    this.name = name;
    this.newAttribute.push(this.name);
    this.newAttribute = {};
  }


  deleteFieldValueSol(index, name, Id) {
    name.splice(index, 1);
    console.log(Id);
    this.deleteSolutions(Id);

  }


  name: string = "";

  public solutionFields= [];
  public data = [];
  //  public objectifsFields=[];

  private apiURL = 'http://localhost:8000/logged/solutions';
  // private apiURLo = 'http://localhost:8000/logged/objectifs';


  constructor(public http: Http){
    // console.log('Hellow user');
    //this.deleteOrganismes(3);
    //this.postOrganismes("1","1","1","1");
    //this.putOrganismes(15, "orga put test", "orga put address", "orga put city", "orga put country");
    this.getSolutions();
    //  this.getObjectifs();
    this.getData();
    // var toto = this.getOrganismes();
    // console.log("toto" + toto);
    // console.log(" test : " + this.getOrganismes().0.OrganismeLibelle);
  }//End constructor()


  ngOnInit() {
    this.getData().subscribe((solutionFields) => {
      this.solutionFields = solutionFields
      // this.objectifsFields = objectifsFields



    }); //This makes data accessible from html template using {{ param }}
  }


  onSubmit(form: NgForm) {
    console.log (form.value);
    this.name = form.value;
    //this.postOrganismes()
    this.postSolutions(form.value.newLibelleSol, form.value.newDescriptionSol);

  }


  getData(){
    let path = this.apiURL + '/';
    return this.http.get(path)
    .map((res: Response) => res.json());
  }//End getData()


  getSolutions(){
    return this.getData().subscribe(data => {
      console.log(data);
      //console.log(data[0]);
      this.data = data
      //result = data;
      //return result;
      return data;
    });
  }//End getOrganismes()

  deleteSolutions(Id){
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

    }//End deleteOrganismes()

    postSolutions(sLib, sDes){

      let path = this.apiURL + "/";


      this.http.post(path, {
        SolutionLibelle : sLib,
        SolutionDescription : sDes

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
