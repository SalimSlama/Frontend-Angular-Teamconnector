import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbCalendar, NgbDate, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TerminauxService } from 'src/app/services/terminaux.service';
const now = new Date();

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.sass']
})
export class HistoriqueComponent implements OnInit {
  closeModal: string;
  Etats: any;
  selected = 'option2';
  terminals = [
    { id: 1, name: 'SM-A307FN' },
    { id: 2, name: 'LDN-L21' },
    { id: 3, name: 'DRA-LX2'},
    { id: 4, name: 'A20' }
  ];
  terminaux=[];
  FiltredTerminaux = [];
  model3: NgbDateStruct;
  today = this.calendar2.getToday();
  model: NgbDateStruct;
  fromDate: NgbDate;
  toDate: NgbDate;
  constructor(private modalService: NgbModal,
              private terminauxSRV:TerminauxService,
              private calendar: NgbCalendar,
               private calendar2: NgbCalendar){
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
      }

  model2: NgbDateStruct = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
  disabled = true;

  selectToday() {
    this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
  }
  ngOnInit(): void {
  this.terminauxSRV.getTerminaux().subscribe((data:any)=>{
    this.terminaux=data
    this.FiltredTerminaux=data
  })
  }
  onSelectChange (e) {
    this.FiltredTerminaux = this.terminaux;
    this.FiltredTerminaux = this.terminaux.filter(t => t.terminal_id == e.id)
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
