import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { DepartementService } from 'src/app/services/departement.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import Swal from 'sweetalert2';
import { DepartementUtilisateurService } from 'src/app/services/departement-utilisateur.service';

@Component({
  selector: 'app-gestion-utilisateurs',
  templateUrl: './gestion-utilisateurs.component.html',
  styleUrls: ['./gestion-utilisateurs.component.sass']
})
export class GestionUtilisateursComponent implements OnInit {
  closeModal: string
  utilisateur: Utilisateur = new Utilisateur()
  id: any;
  nom: any;
  prenom: any;
  adresse: any;
  email: any;
  departement_id: any;
  data: any;
  utilisateurs = [];
  departements = [];
  departement = null;
  departmentuser
  departmentuser1 = []
  userid
  departementid
  trashedutilisateurs = [];
  updateForm: FormGroup;
  form = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    departement: new FormControl('', Validators.required),
  });
  // updateForm = new FormGroup({
  //   nom: new FormControl('',Validators.required),
  //   prenom: new FormControl('',Validators.required),
  //   adresse:new FormControl('',Validators.required),
  //   email:new FormControl('',Validators.required),
  //   departement_id: new FormControl('',Validators.required)
  // });
  constructor(private modalService: NgbModal,
    private utilisateurSRV: UtilisateurService,
    private departementSRV: DepartementService,
    private deputiSRV: DepartementUtilisateurService,
    private formb: FormBuilder,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    //this.getuserdepartment()
    this.getAlluserdepartment()
    this.getutilisateurdata()
    this.getdepdata()
    this.gettrashedutilisateur()
    this.updateForm = this.formb.group({
      nom: [''],
      prenom: [''],
      adresse: [''],
      email: [''],
      departement_id: ['', Validators.min(1)]
    });
  }

  getutilisateurdata() {
    this.utilisateurSRV.getallutilisateurs().subscribe((data: any) => {
      this.utilisateurs = data
    })
  }
  gettrashedutilisateur() {
    this.utilisateurSRV.gettrashedutilisateurs().subscribe((data: any) => {
      this.trashedutilisateurs = data
    })
  }
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
  restore(id) {
    this.utilisateurSRV.restoreutilisateur(id, this.data).subscribe(res => {
      this.gettrashedutilisateur();
      this.getutilisateurdata();
    });
  }
  triggerModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onSelectChange($event) {
    this.departement = $event.id;
  }
  onSubmit() {
    const myForm = this.form.value;
    var departement_id = this.departement
    myForm.departement_id = departement_id
    this.utilisateurSRV.addutilisateurs(myForm).subscribe(
      res => this.getutilisateurdata());

  }
  getdepdata() {
    this.departementSRV.getalldepartements().subscribe((data: any) => {
      data.forEach(element => {
        var dep = {
          id: element.id,
          name: element.nom
        }
        this.departements.push(dep);
      });
    })
  }

  open(content) {
    this.modalService.open(content)
  }
  supprimerutilisateur(id) {
    Swal.fire({
      title: 'vous êtes sûr?',
      text: 'You wont be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer utilisateur!'
    }).then((result) => {
      if (result.value) {
        this.utilisateurSRV.deleteutilisateur(id).subscribe(res => {
          this.getutilisateurdata()
        });
        Swal.fire(
          'Supprimé!',
          'utilisateur supprimé.',
          'success'
        );
        this.reloadComponent()
      }
    });
  }
  triggerModalupdate(content, id) {
    this.getone(id)
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  getone(id) {
    this.utilisateurSRV.getoneutilisateur(id).subscribe((data: any) => {
      this.nom = data.nom;
      this.prenom = data.prenom;
      this.adresse = data.adresse;
      this.email = data.email;
      this.id = id
      this.deputiSRV.getuserdepartment(this.id).subscribe((res: any) => {
        this.departement_id = res.departement.map(x => x.nom)
        //console.log(this.departmentuser);

      })
      this.departement_id = this.departement_id;

      this.updateForm.patchValue({
        nom: this.nom,
        prenom: this.prenom,
        adresse: this.adresse,
        email: this.email,
        departement_id: this.departement_id
      })
    });
  }
  updateutilisateur() {
    this.utilisateurSRV.updateutilisateur(this.id, this.updateForm.value).subscribe((data: any) => {
    });
  }

  showToaster() {
    this.toastr.info("Utilisateur ajouté avec succés")
  }
  getAlluserdepartment() {
    this.deputiSRV.getAlluserdepartment().subscribe((res: any) => {
      this.departmentuser = res.map(x => {
        //console.log(typeof +x.utilisateur_id);
        //console.log((x.utilisateur_id));
        this.getuserdepartment(x.utilisateur_id)
      })
      this.userid = res.utilisateur_id
      this.departement_id = res.departement_id
      //console.log(res);
    })
  }



  getuserdepartment(id) {
    this.deputiSRV.getuserdepartment(id).subscribe((res: any) => {
      this.departmentuser = res
      //console.log(this.departmentuser);

      this.departmentuser1.push(res)
    })
  }
}
