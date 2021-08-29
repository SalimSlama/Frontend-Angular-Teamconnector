import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdministrateurService } from 'src/app/services/administrateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.sass']
})
export class AdministrateurComponent implements OnInit {
  administrateurs = [];
  closeResult: string;
  closeModal: string
  form = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password_confirmation: new FormControl('', Validators.required)
  });
  constructor(private adminSRV: AdministrateurService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getadmindata();
    this.adminSRV.handleDepartmentsCreated().subscribe((data: any) => {
      this.getadmindata();
    })
  }
  getadmindata() {
    this.adminSRV.getalladmin().subscribe((data: any) => {
      this.administrateurs = data
    })
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
  onSubmit() {
    const myForm = this.form.value;
    this.adminSRV.addadmin(myForm).subscribe(
      (res: any) => {
        this.adminSRV.dispatchDepartmentsCreated(res)
      }
      // (result) => { console.log(result) },
      // (errors) => { console.log(errors.error.errors) }
    );
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
        this.adminSRV.deleteadmin(id).subscribe(res => {
          this.getadmindata()
        });
        Swal.fire(
          'Supprimé!',
          'Administrateur supprimé.',
          'success'
        );
      }
    });
  }
  triggerModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
}
