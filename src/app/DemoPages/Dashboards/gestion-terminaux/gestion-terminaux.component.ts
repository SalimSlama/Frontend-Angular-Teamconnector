import { Component, OnInit } from '@angular/core';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gestion-terminaux',
  templateUrl: './gestion-terminaux.component.html',
  styleUrls: ['./gestion-terminaux.component.sass']
})
export class GestionTerminauxComponent implements OnInit {
  faStar = faStar;
  faPlus = faPlus;
  icon = 'pe-7s-phone icon-gradient bg-tempting-azure';

  constructor() { }

  ngOnInit(): void {
  }

}
