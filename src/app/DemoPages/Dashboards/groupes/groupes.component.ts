import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-groupes',
  templateUrl: './groupes.component.html',
  styleUrls: ['./groupes.component.sass']
})
export class GroupesComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open(content) {
    this.modalService.open(content)
  }

  supprimeruser(){
     
      Swal.fire({
        title: 'vous êtes sûr?',
        text: 'You wont be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimer groupe!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Groupe supprimé.',
            'success'
          );
        }
      });
    }

}
