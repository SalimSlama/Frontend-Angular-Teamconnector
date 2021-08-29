import { Component, OnInit } from '@angular/core';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { TerminauxService } from 'src/app/services/terminaux.service';

@Component({
  selector: 'app-gestion-terminaux',
  templateUrl: './gestion-terminaux.component.html',
  styleUrls: ['./gestion-terminaux.component.sass']
})
export class GestionTerminauxComponent implements OnInit {
  faStar = faStar;
  faPlus = faPlus;
  icon = 'pe-7s-phone icon-gradient bg-tempting-azure';
  closeModal: string
  public elementType = NgxQrcodeElementTypes.URL;
  public correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  public url = 'https://www.google.com';
  public value = 'https://www.google.com';
  allterminaux = [];
  terminalname = 'terminal'
  terminalBattery = [];
  constructor(private modalService: NgbModal,
    private terminauxSRV: TerminauxService) { }
  ngOnInit(): void {
    this.getallterminaux()
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
  getallterminaux() {
    this.terminauxSRV.getAllTerminaux().subscribe((data: any) => {
      this.allterminaux = data
      this.terminalname = data.nom
      console.log("les terminaux", this.allterminaux)

    })
  }
}
