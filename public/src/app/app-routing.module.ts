import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { View1Component } from './components/view1/view1.component';
//import { View2Component } from './components/view2/view2.component';
//import { View3Component } from './components/view3/view3.component';
import { LoggedComponent } from './layouts/logged/logged.component';
import { AnonComponent } from './layouts/anon/anon.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProjetComponent } from './components/projet/projet.component';
import { ProjetVisuComponent } from './components/projet-visu/projet-visu.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { ClientsComponent } from './components/clients/clients.component';
import { OrganismesComponent } from './components/organismes/organismes.component';
import { AppComponent } from './app.component';
import { ObjectifsComponent } from './components/objectifs/objectifs.component';
import { FonctionnalitesComponent } from './components/fonctionnalites/fonctionnalites.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { EnjeuxComponent } from './components/enjeux/enjeux.component';
import { CreationComponent } from './components/creation/creation.component';


const routes: Routes = [
  { path: '', component: AnonComponent },
  { path: 'admin', component: LoggedComponent,
  	children: [
		{
			path: '',
			component: OrganismesComponent,
		},

		{
			path: 'projet',
			component: ProjetComponent,

		},

		{
			path: 'gestion',
			component: GestionComponent,
		}


 		 ] },

     { path: 'admin/creation', component: LoggedComponent,
        children: [
        {
      		path: 'objectifs',
      		component: ObjectifsComponent,
      	},
        {
        path: 'projet',
        component: ProjetComponent,
        },
        {
        path: 'gestion',
        component: GestionComponent,
        },
        {
        path: 'enjeux',
        component: EnjeuxComponent,
        },
        {
        path: 'creation',
        component: CreationComponent,
        },
        {
        path: 'fonction',
        component: FonctionnalitesComponent,
        },
        {
        path: 'solution',
        component: SolutionsComponent,
        },

        {
        path: '',
        component: OrganismesComponent,
        }

        ]},


 		{ path: 'logged/projet', component: LoggedComponent,
  		  children: [
		{
			path: 'visu',
			component: ProjetVisuComponent,
		}

		]},

		{ path: 'client', component: ClientsComponent },


	];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
