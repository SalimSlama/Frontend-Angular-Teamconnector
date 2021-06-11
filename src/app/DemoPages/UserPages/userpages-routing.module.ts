import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Userpages',
      status: false
    },
    children: [
      {
        path: 'register', component: RegisterComponent, data: { extraParameter: '' }
      },
      {
        path: 'login', component: LoginComponent, data: { extraParameter: '' }
      },
      {
        path: 'forgot-password', component: ForgotPasswordComponent, data: { extraParameter: '' }
      },
      {
        path: 'register', component: RegisterComponent, data: { extraParameter: '' }
      },
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpagesRoutingModule { }
