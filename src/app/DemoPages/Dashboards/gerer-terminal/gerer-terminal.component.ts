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
  terminals = [
    { id: 1, name: 'SM-A307FN' },
    { id: 2, name: 'LDN-L21' },
    { id: 3, name: 'DRA-LX2' },
    { id: 4, name: 'A20' }
  ];
  terminaux = [];
  FiltredTerminaux = [];
  constructor(private modalService: NgbModal,
    private terminauxSRV: TerminauxService,
  ) { }
  ngOnInit(): void {
    this.terminauxSRV.getlast().subscribe((data: any) => {
      this.FiltredTerminaux = this.terminaux = data
    })
    this.terminauxSRV.getAllTerminaux().subscribe((data: any) => {
      this.terminals = data
      console.log(data);
    })
  }
  onSelectChange(e) {
    this.FiltredTerminaux = this.terminaux;
    // this.FiltredTerminaux = this.terminaux.filter(t => t.appareil.id == e.id)
    var data = []
    this.terminaux.forEach(element => {
      if (element.appareil && element.appareil.id == e.id) {
        data.push(element)
      }
    });
    this.FiltredTerminaux = data
    console.log("aa", this.FiltredTerminaux);

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


}
