import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Snotify } from 'ng-snotify';
import { AdministrateurService } from 'src/app/services/administrateur.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass']
})
export class ResetPasswordComponent implements OnInit {
  slideConfig2 = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 500,
    dots: true,
  };
  public error = []
  resettoken: any
  resetform = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password_confirmation: new FormControl('', Validators.required),
    _token: new FormControl('', Validators.required),
  });
  constructor(private adminSRV: AdministrateurService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {


  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.resettoken = params['token']
    });
    console.log("aa", this.resettoken);
    this.resetform.patchValue({
      _token: this.resettoken
    });
  }
  reset() {

    const myForm = this.resetform.value;
    console.log("11111", myForm);
    this.adminSRV.resetpassword(myForm).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }
  handleResponse(data) {
    //this.Snotify.info("Example body content")
    this.router.navigateByUrl('/userpages/login');

  }
  handleError(error) {
    this.error = error.error.errors;


  }

}
