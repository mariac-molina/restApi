import { Component } from '@angular/core';
// import { Http, Response, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs';

// import { OrgaService } from './orga.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){

  }

  someProperty:string = '';

  ngOnInit(){
    // console.log(this.dataService.cars);
    // this.someProperty = this.dataService.myData();
  }
  // title = '!!!';
  // private apiURL = 'http://localhost:8000/logged/organismes';
  // data: any = {};
  //
  // public organismes = [];

  // constructor(
  //   //public http: Http
  // ){
  //   // console.log('Hellow user');
  //   //this.deleteOrganismes(3);
  //   //this.postOrganismes("1","1","1","1");
  //   //this.putOrganismes(15, "orga put test", "orga put address", "orga put city", "orga put country");
  // //   this.getOrganismes();
  // //   this.getData();
  //   // var toto = this.getOrganismes();
  //   // console.log("toto" + toto);
  //   // console.log(" test : " + this.getOrganismes().0.OrganismeLibelle);
  // }//End constructor()
  //

  // getData(){
  //   let path = this.apiURL + '/';
  //   return this.http.get(path)
  //     .map((res: Response) => res.json());
  // }//End getData()
  //
  // getOrganismes(){
  //
  //   return this.getData().subscribe(data => {
  //     console.log(data);
  //     //console.log(data[0]);
  //     this.data = data
  //     //result = data;
  //     //return result;
  //     return data;
  //   });
  // }//End getOrganismes()
  //
  // public ngOnInit() {
  //         this.getData().subscribe((organismes) => {
  //
  //             // do stuff with our data here.
  //             // ....
  //             // asign data to our class property in the end
  //             // so it will be available to our template
  //             this.organismes = organismes
  //         })
  //     }
  //
  // deleteOrganismes(orgId){
  //   let path = this.apiURL + '/' + orgId;
  //   return this.http.delete(path).subscribe(
  //     (val) => {
  //       console.log("DELETE call successful, value returned in body", val);
  //     },
  //     response => {
  //       console.log("DELETE call in error", response);
  //     },
  //     () => {
  //       console.log("The DELETE observable is now completed");
  //     });
  // }//End deleteOrganismes()
  //
  // postOrganismes(oLib, oAdr, oVille, oPays){
  //
  //   let path = this.apiURL + "/?";
  //
  //   if(oLib != null)
  //     path = path + "OrganismeLibelle=" + oLib;
  //   else
  //     path = path + "OrganismeLibelle=" + "";
  //   if(oAdr != null)
  //     path = path + "&OrganismeAdresse=" + oAdr;
  //   else
  //     path = path + "&OrganismeAdresse=" + "";
  //   if(oVille != null)
  //     path = path + "&OrganismeVille=" + oVille;
  //   else
  //     path = path + "&OrganismeVille=" + "";
  //   if(oPays != null)
  //     path = path + "&OrganismePays=" + oPays;
  //   else
  //     path = path + "&OrganismePays=" + "";
  //
  //   this.http.post(path).subscribe(
  //       (val) => {
  //           console.log("POST call successful value returned in body",
  //                       val);
  //       },
  //       response => {
  //           console.log("POST call in error", response);
  //       },
  //       () => {
  //           console.log("The POST observable is now completed.");
  //       });
  //
  // }//End postOrganismes()
  //
  // putOrganismes(id, oLib, oAdr, oVille, oPays){
  //
  //
  //   let path = this.apiURL + '/' + id + '?';
  //   if(oLib != null){
  //     this.http.put(path + "OrganismeLibelle=" + oLib).subscribe(
  //       (val) => {
  //         console.log("UPDATE call successful value returned in body");
  //       },
  //       () => {
  //         console.log("UPDATE call in error", response);
  //       },
  //       () => {
  //         console.log("The UPDATE observable is now completed");
  //       });
  //   }//End if
  //
  //   if(oAdr != null){
  //     this.http.put(path + "OrganismeAdresse=" + oAdr).subscribe(
  //       (val) => {
  //         console.log("UPDATE call successful value returned in body");
  //       },
  //       () => {
  //         console.log("UPDATE call in error", response);
  //       },
  //       () => {
  //         console.log("The UPDATE observable is now completed");
  //       });
  //   }//End if
  //
  //   if(oVille != null){
  //     this.http.put(path + "OrganismeVille=" + oVille).subscribe(
  //       (val) => {
  //         console.log("UPDATE call successful value returned in body");
  //       },
  //       () => {
  //         console.log("UPDATE call in error", response);
  //       },
  //       () => {
  //         console.log("The UPDATE observable is now completed");
  //       });
  //   }//End if
  //
  //   if(oPays != null){
  //     this.http.put(path + "OrganismePays=" + oPays).subscribe(
  //       (val) => {
  //         console.log("UPDATE call successful value returned in body");
  //       },
  //       () => {
  //         console.log("UPDATE call in error", response);
  //       },
  //       () => {
  //         console.log("The UPDATE observable is now completed");
  //       });
  //   }//End if
  // }
  //
  //
  // getEnjeux(){
  //
  // }//End getEnjeux()
  //
  // postEnjeux(){
  //
  // }//End posEnjeux()
  //
  // putEnjeux(){
  //
  // }//End putEnjeux()
  //
  // deleteEnjeux(){
  //
  // }//end deleteEnjeux()
  //
  // getObjectifs(){
  //
  // }//End getObjectifs()
  //
  // postObjectifs(){
  //
  // }//End postObjectifs()
  //
  // putObjectifs(){
  //
  // }//End putObjectifs()
  //
  // deleteObjectifs(){
  //
  // }//End deleteObjectifs()

}
