import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DepartementService } from 'src/app/services/departement.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-groupes',
  templateUrl: './groupes.component.html',
  styleUrls: ['./groupes.component.sass']
})
export class GroupesComponent implements OnInit {
  closeModal: string
  departements=[]
  form: FormGroup
  formtest= new FormGroup({
    nom: new FormControl('',Validators.required)  });
    
  constructor(private modalService: NgbModal,
              private departementSRV: DepartementService,
              private formb: FormBuilder) { }
  ngOnInit(): void {
   this.getdepdata()
    this.form = this.formb.group({
      nomm:['',[Validators.required]]
    });
  }
  getdepdata(){
    this.departementSRV.getalldepartements().subscribe((data:any)=>{
      this.departements=data
    })
  }
  onSubmit(){
    const myForm = this.formtest.value;    
    this.departementSRV.adddepartements(myForm).subscribe(
      res => this.getdepdata());    
  }
  deletedep(id) {
    this.departementSRV.deletedep(id).subscribe(res => {
      this.getdepdata();
    });
    }
  open(content) {
    this.modalService.open(content)
  }
  supprimeruser(id){ 
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
          this.departementSRV.deletedep(id).subscribe(res => {
            this.getdepdata();
          });
          Swal.fire(
            'Supprimé!',
            'Département supprimé.',
            'success'
          );
        }
      });
    }
    triggerModal(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
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
        return  `with: ${reason}`;
      }
    }
}
