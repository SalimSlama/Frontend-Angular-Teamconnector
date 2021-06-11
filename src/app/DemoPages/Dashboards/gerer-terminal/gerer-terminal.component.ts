import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudService } from 'src/app/services/crud.service';
import { TerminauxService } from 'src/app/services/terminaux.service';

@Component({
  selector: 'app-gerer-terminal',
  templateUrl: './gerer-terminal.component.html',
  styleUrls: ['./gerer-terminal.component.sass']
})
export class GererTerminalComponent implements OnInit {
  closeModal: string;
  Etats: any;
  selected = 'option2';
  cities12 = [
    { id: 1, name: 'LD-21N' },
    { id: 2, name: 'Huawei y7' },
    { id: 3, name: 'Samsung A30s'},
    { id: 4, name: 'Oppo A9' }
  ];
  terminaux=[]
  constructor(private modalService: NgbModal,
              private terminauxSRV:TerminauxService,
              ) { }

  ngOnInit(): void {
  this.terminauxSRV.getTerminaux().subscribe((data:any)=>{
    this.terminaux=data
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

 
}
