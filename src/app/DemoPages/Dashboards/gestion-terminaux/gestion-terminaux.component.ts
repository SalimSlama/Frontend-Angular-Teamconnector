import { Component, OnInit } from '@angular/core';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

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
public value = 'https://medium.com/@vaiz10';
  constructor(private modalService: NgbModal) { }
  ngOnInit(): void {
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
