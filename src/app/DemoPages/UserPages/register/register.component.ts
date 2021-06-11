import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  slideConfig2 = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 500,
    dots: false,
  };

  form: FormGroup;
  constructor(private fb: FormBuilder,
              private registerSRV:CrudService
              ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      nom:['',[Validators.required]],
      prenom:['',[Validators.required]],
      adresse:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]],
      password_confirmation:['',[Validators.required]]

    });
  }
  submit(){
    const myForm = this.form.value;
    
    this.registerSRV.register(myForm).subscribe(
      (result) => {console.log(result)},
      (errors) => {console.log(errors.error.errors)}
      
      
    );
  }

}
