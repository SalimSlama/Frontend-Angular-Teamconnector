import { Component, OnInit } from '@angular/core';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  faStar = faStar;
  faPlus = faPlus;
  icon = 'pe-7s-rocket icon-gradient bg-tempting-azure';
  modeldebut
  modelfin
  constructor() { }

  ngOnInit(): void {
  }
  supprimerappareil() {

    Swal.fire({
      title: 'vous êtes sûr?',
      text: 'You wont be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer Appareil!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Appareil supprimé.',
          'success'
        );
      }
    });
  }
}
