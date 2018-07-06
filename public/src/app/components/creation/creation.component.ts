
import { Component,Input, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})

export class CreationComponent implements OnInit {

  private apiURL = 'http://localhost:8000/logged/organismes';

  data: any = {};
  ids: any = {};

  name: string = "";

  public organismes = [];
  public orgaIds = [];

  constructor(public http: Http){
    this.getOrganismes();
    this.getData();
  }//End constructor()

  ngOnInit() {
    this.getData().subscribe((organismes) => {
      this.organismes = organismes
    }); //This makes data accessible from html template using {{ param }}
    // console.log("dataaaaa : " + this.data);
    // console.log(this.getAssociatedId("OrgDDDDD"));
  }

  onSubmit(form: NgForm) {
    console.log (form.value);

    return this.getEnjeuData(form.value.orga).subscribe(data => {
      console.log(data);
      this.data = data;

      return data;
    });

  }
  clicked(e, val){
    console.log("my id : " + val.id);
    console.log("my lib : " + val.OrganismeLibelle);
    console.log("my adr : " + val.OrganismeAdresse);
    console.log("my ville : " + val.OrganismeVille);
    console.log("my pays : " + val.OrganismePays);
  }

  getAssociatedId(oLib){
    let path = this.apiURL + '/id/' + oLib;

    return this.http.get(path).map((res: Response) => res.json());
  }

  getOrgaId(oLib){
    return this.getAssociatedId(oLib).subscribe(ids => {
      console.log(ids);
      this.ids = ids;

      return ids;
    });
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

  getEnjeuData(name){
    return this.http.get('http://localhost:8000/logged/organismes/OrgDDDDD/enjeux').map((res: Response) => res.json());
  }




}


/* ---------------------------------------------OBJECTIFS------------------------------------------------------------------------------ */


/* private apiURL = 'http://localhost:8000/logged/objectifs';


addFieldValueObj(name, form: NgForm) {
this.onSubmit(form: NgForm)
this.name = name;
this.name.push(this.newAttribute)
this.newAttribute = {};
}

deleteFieldValueObj(index, name, objId) {
name.splice(index, 1);
console.log(objId);
this.deleteObjectifs(objId);

}

constructor(public http: Http){
// console.log('Hellow user');
//this.deleteOrganismes(3);
//this.postOrganismes("1","1","1","1");
//this.putOrganismes(15, "orga put test", "orga put address", "orga put city", "orga put country");
this.getObjectifs();
// this.getObjectifs();
this.getData();
// var toto = this.getOrganismes();
// console.log("toto" + toto);
// console.log(" test : " + this.getOrganismes().0.OrganismeLibelle);
}//End constructor()


ngOnInit() {
this.getData().subscribe((objectifsFields) => {
this.objectifsFields = objectifsFields


}); //This makes data accessible from html template using {{ param }}
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
this.putEnjeux(id, form.value.newLibelleEnj, form.value.newDescriptionEnj);
location.reload();
}

getData(){
let path = this.apiURL + '/';
return this.http.get(path)
.map((res: Response) => res.json());
}//End getData()

getObjectifs(){
return this.getData().subscribe(data => {
console.log(data);
//console.log(data[0]);
this.data = data
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

putObjectifs(id, oLib, oDes){


let path = this.apiURL + '/' + id;
this.http.put(path, {
ObjectifLibelle : oLib,
ObjectifDescription : oDes
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

} */

/* ---------------------------------------------FONCTIONNALITES------------------------------------------------------------------------------ */



/* name: string = "";


public fonctionFields=[];

private apiURL = 'http://localhost:8000/logged/fonctionnalites';


addFieldValueFonc(name, form: NgForm) {
this.onSubmit(form: NgForm)
this.name = name;
this.name.push(this.newAttribute)
this.newAttribute = {};
}

deleteFieldValueFonc(index, name, foncId) {
name.splice(index, 1);
console.log(foncId);
this.deleteFonction(foncId);

}

constructor(public http: Http){
// console.log('Hellow user');
//this.deleteOrganismes(3);
//this.postOrganismes("1","1","1","1");
//this.putOrganismes(15, "orga put test", "orga put address", "orga put city", "orga put country");
this.getFonction();
// this.getObjectifs();
this.getData();
// var toto = this.getOrganismes();
// console.log("toto" + toto);
// console.log(" test : " + this.getOrganismes().0.OrganismeLibelle);
}//End constructor()


ngOnInit() {
this.getData().subscribe((fonctionFields) => {
this.fonctionFields = fonctionFields


}); //This makes data accessible from html template using {{ param }}
}


onSubmit(form: NgForm) {
console.log (form.value);
this.name = form.value;
//this.postOrganismes()
this.postFonction(form.value.newLibelleFonc, form.value.newDescriptionFonc);
}

getData(){
let path = this.apiURL + '/';
return this.http.get(path)
.map((res: Response) => res.json());
}//End getData()

getFonction(){
return this.getData().subscribe(data => {
console.log(data);
//console.log(data[0]);
this.data = data
//result = data;
//return result;
return data;
});
}//End getOrganismes()

deleteFonction(foncId){
let path = this.apiURL + '/' + foncId;
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

postFonction(fLib, fDes){

let path = this.apiURL + "/";


this.http.post(path, {
FonctionnaliteLibelle : fLib,
FonctionnaliteDescription : fDes

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

}//End postOrganismes()

putFonction(id, fLib, fDes){


let path = this.apiURL + '/' + id;
this.http.put(path, {
FonctionnaliteLibelle : oLib,
FonctionnaliteDescription : oDes
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

} */

/* ---------------------------------------------SOLUTIONS------------------------------------------------------------------------------ */



/* name: string = "";


public solutionFields=[];

private apiURL = 'http://localhost:8000/logged/solutions';


addFieldValueSolu(name, form: NgForm) {
this.onSubmit(form: NgForm)
this.name = name;
this.name.push(this.newAttribute)
this.newAttribute = {};
}

deleteFieldValueSolu(index, name, soluId) {
name.splice(index, 1);
console.log(foncId);
this.deleteSolution(soluId);

}

constructor(public http: Http){
// console.log('Hellow user');
//this.deleteOrganismes(3);
//this.postOrganismes("1","1","1","1");
//this.putOrganismes(15, "orga put test", "orga put address", "orga put city", "orga put country");
this.getSolution();
// this.getObjectifs();
this.getData();
// var toto = this.getOrganismes();
// console.log("toto" + toto);
// console.log(" test : " + this.getOrganismes().0.OrganismeLibelle);
}//End constructor()


ngOnInit() {
this.getData().subscribe((solutionFields) => {
this.solutionFields = solutionFields


}); //This makes data accessible from html template using {{ param }}
}


onSubmit(form: NgForm) {
console.log (form.value);
this.name = form.value;
//this.postOrganismes()
this.postFonction(form.value.newLibelleFonc, form.value.newDescriptionFonc);
}

getData(){
let path = this.apiURL + '/';
return this.http.get(path)
.map((res: Response) => res.json());
}//End getData()

getSolution(){
return this.getData().subscribe(data => {
console.log(data);
//console.log(data[0]);
this.data = data
//result = data;
//return result;
return data;
});
}//End getOrganismes()

deleteSolution(soluId){
let path = this.apiURL + '/' + soluId;
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

postSolution(sLib, sDes){

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

}//End postOrganismes()

putSolution(id, sLib, sDes){


let path = this.apiURL + '/' + id;
this.http.put(path, {
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
*/
