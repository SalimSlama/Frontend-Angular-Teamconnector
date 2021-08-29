import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministrateurService } from 'src/app/services/administrateur.service';
import { cloneDeep, random } from 'lodash-es';

import {
  GlobalConfig, ToastrService
} from 'ngx-toastr';

const types = ['success', 'error', 'info', 'warning'];
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  heading = 'Toastr Alerts';
  subheading = 'Notifications represent one of the best ways to give feedback for various users actions.';
  icon = 'pe-7s-glasses icon-gradient bg-love-kiss';

  options: GlobalConfig;
  title: any
  message: any
  type = types[1];
  version = VERSION;
  enableBootstrap = false;
  private lastInserted: number[] = [];
  inline = false;
  inlinePositionIndex = 0;

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
    private router: Router,
    private adminSRV: AdministrateurService,
    private route: ActivatedRoute,
    public toastr: ToastrService,
  ) {
    this.options = this.toastr.toastrConfig;
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
        console.log(error.error['message']);

        this.message = error.error['message']
        this.openToast();

      }
    )
  }
  openToast() {
    const { message, title } = this.getMessage();
    // Clone current config so it doesn't change when ngModel updates
    const opt = cloneDeep(this.options);
    const inserted = this.toastr.show(
      message,
      title,
      opt,
      this.options.iconClasses[this.type],
    );
    if (inserted) {
      this.lastInserted.push(inserted.toastId);
    }
    return inserted;
  }
  getMessage() {
    return {
      message: this.message,
      title: 'Erreur',
    };
  }

}
