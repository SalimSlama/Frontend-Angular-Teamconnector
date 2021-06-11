import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  slideConfig2 = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 500,
    dots: true,
  };
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group( {
      email: '',
      password: ''
    });
  }
  submit(){   
    const formData = this.form.getRawValue();

    const data ={
      username: formData.email,
      password: formData.password,
      grant_type: 'client_credentials',
      client_id: 6,
      client_secret:'Dh2ovdRq4m2fJ2r27TRFwCrpnBoopn20GZ0SsnFA',
      scope:'*'
    };

    this.http.post('http://127.0.0.1:8000/oauth/token', data).subscribe(
      (result:any)=>{
        console.log('success');
        localStorage.setItem('token', result.access_token);
        this.router.navigate(['/dashboards/gerer-terminal'])  
      },
      error =>{
        console.log('error');
        console.log(error);
      }
    )
  }

}
