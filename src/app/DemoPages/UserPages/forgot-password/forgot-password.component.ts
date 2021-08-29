import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalConfig, ToastrService } from 'ngx-toastr';
import { AdministrateurService } from 'src/app/services/administrateur.service';
import { cloneDeep } from 'lodash-es';
const types = ['success', 'error', 'info', 'warning'];

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styles: []
})
export class ForgotPasswordComponent implements OnInit {

  slideConfig2 = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 500,
    dots: true,
  };
  title: any
  title1: any
  message: any
  message1: any
  options: GlobalConfig;
  private lastInserted: number[] = [];
  type = types[3];
  version = VERSION;
  enableBootstrap = false;
  inline = false;
  inlinePositionIndex = 0;
  resetform: FormGroup;
  constructor(
    private adminSRV: AdministrateurService,
    private form: FormBuilder,
    public toastr: ToastrService) {
    this.options = this.toastr.toastrConfig;

  }

  ngOnInit() {
    this.resetform = this.form.group({
      email: ''
    });
  }
  submit() {
    const formData = this.resetform.value
    this.adminSRV.forgotpassword(formData).subscribe(
      (result: any) => {

        this.message1 = result.message
        console.log("bbbb", this.message1);
        this.openToast1();

      },
      error => {
        console.log("aaaa", error.error['message']);
        this.message = error.error.errors['email']
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
  openToast1() {
    const { message, title } = this.getMessage1();
    // Clone current config so it doesn't change when ngModel updates
    const opt = cloneDeep(this.options)
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
  getMessage1() {
    return {
      message: this.message1,
      title: 'Attention',
    };
  }

}
