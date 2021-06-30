import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsRoutingModule } from './Dashboards-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionTerminauxComponent } from './gestion-terminaux/gestion-terminaux.component';
import { GestionApplicationsComponent } from './gestion-applications/gestion-applications.component';
import { GroupesComponent } from './groupes/groupes.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';
import { GestionLocalisationComponent } from './gestion-localisation/gestion-localisation.component';
import { GestionNotificationsComponent } from './gestion-notifications/gestion-notifications.component';
import { ConfigurationParamComponent } from './configuration-param/configuration-param.component';
import { RapportsComponent } from './rapports/rapports.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { GererTerminalComponent } from './gerer-terminal/gerer-terminal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
import { TrendModule } from 'ngx-trend';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AgmCoreModule } from '@agm/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { HistoriqueComponent } from './historique/historique.component'
import { NgApexchartsModule } from 'ng-apexcharts';
import { OneterminalComponent } from './oneterminal/oneterminal.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    NgbModule,
    SlickCarouselModule,
    RoundProgressModule,
    FontAwesomeModule,
    CommonModule,
    FontAwesomeModule,
    ChartsModule, 
    TrendModule, 
    NgbModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    NgxQRCodeModule ,
    NgApexchartsModule,
    PerfectScrollbarModule,
    RoundProgressModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBLQ6lpF6dacVJPx9YEROJj9gxhnbWzF6w'
    })
     
  ],
  declarations: [
  
    DashboardComponent,
       GestionTerminauxComponent,
       GestionApplicationsComponent,
       GroupesComponent,
       GestionUtilisateursComponent,
       GestionLocalisationComponent,
       GestionNotificationsComponent,
       ConfigurationParamComponent,
       RapportsComponent,
       GererTerminalComponent,
       HistoriqueComponent,
       OneterminalComponent,
       AdministrateurComponent,
  ]
})
export class DashboardsModule { }
