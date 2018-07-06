import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AnonComponent } from './layouts/anon/anon.component';
import { LoggedComponent } from './layouts/logged/logged.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProjetComponent } from './components/projet/projet.component';
import { ProjetVisuComponent } from './components/projet-visu/projet-visu.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { ClientsComponent } from './components/clients/clients.component';
import { OrganismesComponent } from './components/organismes/organismes.component';
import { FormsModule } from '@angular/forms';
import { enableProdMode } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ObjectifsComponent } from './components/objectifs/objectifs.component';
import { FonctionnalitesComponent } from './components/fonctionnalites/fonctionnalites.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { EnjeuxComponent } from './components/enjeux/enjeux.component';
import { CreationComponent } from './components/creation/creation.component';

import { RouterModule } from '@angular/router';

import { AuthService } from './services/auth.service';
import { StatusComponent } from './components/status/status.component';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';
// import { OrgaService } from './orga.service';
// import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AnonComponent,
    LoggedComponent,
    AccueilComponent,
    ProjetComponent,
    ProjetVisuComponent,
    GestionComponent,
    ClientsComponent,
    OrganismesComponent,
    ObjectifsComponent,
    FonctionnalitesComponent,
    SolutionsComponent,
    EnjeuxComponent,
    CreationComponent,
    StatusComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '',
        component: AnonComponent,
        canActivate: [LoginRedirect]
      },
      {
        path: 'admin',
        component: LoggedComponent,
        canActivate: [LoginRedirect]
      }
    ])
  ],
  providers: [
    AuthService,
    EnsureAuthenticated,
    LoginRedirect
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
