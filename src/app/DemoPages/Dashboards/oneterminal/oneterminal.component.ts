import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { cloneDeep, random } from 'lodash-es';

import { ActivatedRoute } from '@angular/router';
import { faAngleDown, faAngleUp, faDotCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Color } from 'ng2-charts';
import { TerminauxService } from 'src/app/services/terminaux.service';
import {
  GlobalConfig, ToastrService
} from 'ngx-toastr';

const types = ['success', 'error', 'info', 'warning'];
@Component({
  selector: 'app-oneterminal',
  templateUrl: './oneterminal.component.html',
  styleUrls: ['./oneterminal.component.sass']
})
export class OneterminalComponent implements OnInit {
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faDotCircle = faDotCircle;
  faArrowLeft = faArrowLeft;
  lat = 35.837384;
  lng = 10.592966;
  heading = 'Management';
  subheading = 'This is an example dashboard created using build-in elements and components.';
  icon = 'pe-7s-car icon-gradient bg-mean-fruit';
  nom: any;
  updateForm: FormGroup;

  optionss: GlobalConfig;
  title: any
  message: any
  private lastInserted: number[] = [];
  type = types[0];

  public datasets = [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 55, 38, 59, 80, 46],
      datalabels: {
        display: false,
      },

    }
  ];
  public lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(58, 196, 125, 0.35)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderColor: '#3ac47d',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#3ac47d',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#3ac47d',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
    },
  ];

  public labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  public options = {
    layout: {
      padding: {
        left: 0,
        right: 8,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false
        }
      }],
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false
        }
      }]
    },
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false
  };
  id: any
  terminal = []
  lattitude
  longitude
  terminalname = []
  constructor(private route: ActivatedRoute,
    private terminalSRV: TerminauxService,
    private formb: FormBuilder,
    public toastr: ToastrService) {
    this.optionss = this.toastr.toastrConfig;
  }

  ngOnInit() {
    let myid = this.route.snapshot.params.id
    console.log("mon identifiant est :", myid);
    this.id = myid
    this.getOneTerminal()
    this.getnameTerminal()
    this.updateForm = this.formb.group({
      nom: ['']
    });

  }
  getOneTerminal() {
    this.terminalSRV.getOneTerminal(this.id).subscribe((data: any) => {
      this.terminal = data
      this.lattitude = data.Lattitude
      this.longitude = data.Longitude
      console.log(this.terminal)

    })
  }
  getnameTerminal() {
    this.terminalSRV.getnameTerminal(this.id).subscribe((data: any) => {
      this.terminalname = data.nom
      console.log(this.terminalname);

    })
  }
  updateterminal() {
    this.terminalSRV.updatenameTerminal(this.id, this.updateForm.value).subscribe((data: any) => {
      this.message = "Modification avec succés"
      this.openToast();
    });
  }
  openToast() {
    const { message, title } = this.getMessage();
    // Clone current config so it doesn't change when ngModel updates
    const opt = cloneDeep(this.options);
    const inserted = this.toastr.show(
      message,
      title,
      opt,
      this.optionss.iconClasses[this.type],
    );
    if (inserted) {
      this.lastInserted.push(inserted.toastId);
    }
    return inserted;
  }
  getMessage() {
    return {
      message: this.message,
      title: 'Succes',
    };
  }


}
