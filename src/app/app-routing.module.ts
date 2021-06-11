import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// // Pages

import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'userpages/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [
      {
        path: 'userpages',
        loadChildren: () => import('./DemoPages/UserPages/userpages.module').then(m => m.UserpagesModule),
      },
    ]
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'dashboards',
        loadChildren: () => import('./DemoPages/Dashboards/Dashboards.module').then(m => m.DashboardsModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
