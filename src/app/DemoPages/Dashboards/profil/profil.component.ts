import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdministrateurService } from 'src/app/services/administrateur.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.sass']
})
export class ProfilComponent implements OnInit {
  userid: any;
  user: any;
  nom: any;
  prenom: any;
  adresse: any;
  email: any;
  updateForm: FormGroup;

  constructor(private adminSRV: AdministrateurService,
    private formb: FormBuilder,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.userid = this.adminSRV.CurrentUser.sub;
    console.log("ID is:", this.userid);
    this.adminSRV.getoneadmin(this.userid).subscribe((d) => {
      this.user = d;
      console.log("user", this.user);

      this.nom = this.user.nom;
      this.prenom = this.user.prenom;
      this.adresse = this.user.adresse;
      this.email = this.user.email;

      this.updateForm.patchValue({
        nom: this.nom,
        prenom: this.prenom,
        adresse: this.adresse,
        email: this.email,
      })
    });
    this.updateForm = this.formb.group({
      nom: [''],
      prenom: [''],
      adresse: [''],
      email: [''],
      password: [''],
      password_confirmation: ['']
    });

  }

  updateutilisateur() {
    this.adminSRV.updateadmin(this.userid, this.updateForm.value).subscribe((data: any) => {
      this.showToaster();
      this.reloadComponent();
    });
  }
  showToaster() {
    this.toastr.info("Vos données sont modifiées avec succés")
  }
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
