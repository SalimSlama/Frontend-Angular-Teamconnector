import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DepartementService } from 'src/app/services/departement.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-groupes',
  templateUrl: './groupes.component.html',
  styleUrls: ['./groupes.component.sass']
})
export class GroupesComponent implements OnInit {
  closeModal: string;
  departements = [];
  trasheddepartements = [];
  form: FormGroup;
  updateForm: FormGroup;
  nom: any;
  id: any;
  data: any;
  formtest = new FormGroup({
    nom: new FormControl('', Validators.required)
  });

  constructor(private modalService: NgbModal,
    private departementSRV: DepartementService,
    private formb: FormBuilder,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.getdepdata()
    this.gettrasheddepartments()

    this.departementSRV.handleDepartmentsCreated().subscribe((data: any) => {
      this.getdepdata()
      this.gettrasheddepartments()

    })
    this.updateForm = this.formb.group({
      nom: ['']
    });
  }
  getdepdata() {
    this.departementSRV.getalldepartements().subscribe((data: any) => {
      this.departements = data
    })
  }
  gettrasheddepartments() {
    this.departementSRV.gettrasheddepartements().subscribe((data: any) => {
      console.log("asz", data);
      this.trasheddepartements = data
    })
  }

  onSubmit() {
    const myForm = this.formtest.value;
    this.departementSRV.adddepartements(myForm).subscribe(
      res => this.getdepdata());
  }
  deletedep(id) {
    this.departementSRV.deletedep(id).subscribe(res => {
      //this.reloadComponent();
      //this.getdepdata();
    });
  }
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
  restore(id) {
    this.departementSRV.restoredepartement(id, this.data).subscribe(res => {
      this.gettrasheddepartments();
      this.getdepdata();
    });
  }
  open(content) {
    this.modalService.open(content)
  }
  supprimeruser(id) {
    Swal.fire({
      title: 'vous êtes sûr?',
      text: 'You wont be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer département!'
    }).then((result) => {
      if (result.value) {
        this.departementSRV.deletedep(id).subscribe((res: any) => {
          this.departementSRV.dispatchDepartmentsCreated(res)
        });
        Swal.fire(
          'Supprimé!',
          'Département supprimé.',
          'success',
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
  triggerModalupdate(content, id) {
    this.getone(id)
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
  getone(id) {
    this.departementSRV.getonedepartement(id).subscribe((data: any) => {
      this.nom = data.nom;
      this.id = id
      this.updateForm.patchValue({
        nom: this.nom
      })
    });
  }
  updatedepartement() {
    this.departementSRV.updatedepartement(this.id, this.updateForm.value).subscribe((data: any) => {
      this.getdepdata()
      this.showToaster()
    });
  }
  showToaster() {
    this.toastr.info("Département modifié avec succés")
  }


}
