import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-applications',
  templateUrl: './gestion-applications.component.html',
  styleUrls: ['./gestion-applications.component.sass']
})
export class GestionApplicationsComponent implements OnInit {
  icon = 'pe-7s-box2 icon-gradient bg-tempting-azure';
  constructor() { }

  ngOnInit(): void {
  }

}
