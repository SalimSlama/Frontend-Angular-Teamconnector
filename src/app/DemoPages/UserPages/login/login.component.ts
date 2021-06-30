import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministrateurService } from 'src/app/services/administrateur.service';

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
    private router: Router,
    private adminSRV: AdministrateurService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: '',
      password: ''
    });
  }
  submit() {
    const formData = this.form.value
    this.adminSRV.login(formData).subscribe(
      (result: any) => {
        console.log(result.token)
        let returnURL = this.route.snapshot.queryParamMap.get('returnURL')
        localStorage.setItem('token', result.token);
        this.router.navigate([returnURL || '/dashboards/'])
      },
      error => {
        console.log('error');
        console.log(error);
      }
    )
  }

}
