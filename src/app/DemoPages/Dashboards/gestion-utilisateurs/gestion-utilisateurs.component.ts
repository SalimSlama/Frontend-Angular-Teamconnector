import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { DepartementService } from 'src/app/services/departement.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-utilisateurs',
  templateUrl: './gestion-utilisateurs.component.html',
  styleUrls: ['./gestion-utilisateurs.component.sass']
})
export class GestionUtilisateursComponent implements OnInit {
  closeModal: string
  utilisateur: Utilisateur= new Utilisateur()
  id: any;
  nom: any;
  prenom: any;
  adresse: any;
  email: any;
  departement_id: any;
  utilisateurs=[];
  departements=[];
  departement= null;
  updateForm: FormGroup;
  form= new FormGroup({
    nom: new FormControl('',Validators.required),
    prenom: new FormControl('',Validators.required),
    adresse: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
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
              private formb: FormBuilder) { }

  ngOnInit(): void {
    this.getutilisateurdata()
    this.getdepdata()
    this.updateForm = this.formb.group({
      nom: [''],
      prenom: [''],
      adresse: [''],
      email: [''],
      departement_id: ['']
    });    
  }

  getutilisateurdata(){
    this.utilisateurSRV.getallutilisateurs().subscribe((data:any)=>{
      this.utilisateurs=data
    })
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
  onSelectChange($event){
    this.departement= $event.id;
  }
  onSubmit(){
    const myForm = this.form.value;    
    var departement_id = this.departement
    myForm.departement_id= departement_id
    this.utilisateurSRV.addutilisateurs(myForm).subscribe(res=>  this.getutilisateurdata());
    
  }
  getdepdata(){
    this.departementSRV.getalldepartements().subscribe((data:any)=>{
      data.forEach(element => {
        var dep = {
          id : element.id,
          name: element.nom
        }
        this.departements.push(dep);
      });
    })
  }

  open(content) {
    this.modalService.open(content)
  }
  supprimerutilisateur(id){ 
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
        }
      });
  }
  triggerModalupdate(content,id) {
    console.log(id)
    this.getone(id)
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
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
      this.departement_id = data.departement_id;
      this.id=id
      console.log("données:",data);
      this.updateForm.patchValue({
        nom:this.nom,
        prenom: this.prenom,
        adresse: this.adresse,
        email: this.email,
      })
    });
 }
 updateutilisateur(){
 this.utilisateurSRV.updateutilisateur(this.id,this.updateForm.value).subscribe((data: any)=>{
   });
 }
}
