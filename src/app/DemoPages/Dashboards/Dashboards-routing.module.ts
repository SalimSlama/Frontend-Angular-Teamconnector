import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ConfigurationParamComponent } from './configuration-param/configuration-param.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GererTerminalComponent } from './gerer-terminal/gerer-terminal.component';
import { GestionApplicationsComponent } from './gestion-applications/gestion-applications.component';
import { GestionLocalisationComponent } from './gestion-localisation/gestion-localisation.component';
import { GestionNotificationsComponent } from './gestion-notifications/gestion-notifications.component';
import { GestionTerminauxComponent } from './gestion-terminaux/gestion-terminaux.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';
import { GroupesComponent } from './groupes/groupes.component';
import { HistoriqueComponent } from './historique/historique.component';
import { OneterminalComponent } from './oneterminal/oneterminal.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboards',
      status: false
    },
    children: [
 
       {
        path: 'dashboard', component: DashboardComponent, data: { extraParameter: '' }
      },
      {
        path: 'gerer-terminal', component: GererTerminalComponent, data: { extraParameter: '' }
      },
      {
        path: 'gestion-terminaux', component: GestionTerminauxComponent, data: { extraParameter: '' }
      },
      {
        path: 'gestion-applications', component: GestionApplicationsComponent, data: { extraParameter: '' }
      },
      {
        path: 'gestion-groupes', component: GroupesComponent, data: { extraParameter: '' }
      },
      {
        path: 'gestion-utilisateurs', component: GestionUtilisateursComponent, data: { extraParameter: '' }
      },
      {
        path: 'gestion-localisation', component: GestionLocalisationComponent, data: { extraParameter: '' }
      },
      {
        path: 'historique', component: HistoriqueComponent, data: { extraParameter: '' }
      },
      {
        path: 'oneterminal', component: OneterminalComponent, data: { extraParameter: '' }
      },
      {
        path: 'admin', component: AdministrateurComponent, data: { extraParameter: '' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
