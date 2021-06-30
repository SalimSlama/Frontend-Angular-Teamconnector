import { Component, OnInit } from "@angular/core";
import {
  faAngleDown,
  faAngleUp,
  faArrowRight,
  faCog,
  faDotCircle,
  faTh,
} from "@fortawesome/free-solid-svg-icons";
import { Color } from "ng2-charts";
import { TerminauxService } from "src/app/services/terminaux.service";

@Component({
  selector: "app-gestion-localisation",
  templateUrl: "./gestion-localisation.component.html",
  styleUrls: ["./gestion-localisation.component.sass"],
})
export class GestionLocalisationComponent implements OnInit {
  icon = "pe-7s-box2 icon-gradient bg-tempting-azure";
  faCog = faCog;
  faTh = faTh;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faArrowRight = faArrowRight;
  faDotCircle = faDotCircle;
  title = "My first AGM project";
  lat = 35.837384;
  lng = 10.592966;

  public options = {
    layout: {
      padding: {
        left: 0,
        right: 8,
        top: 0,
        bottom: 0,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  public lineChartColors: Color[] = [
    {
      // dark grey
      backgroundColor: "rgba(247, 185, 36, 0.2)",
      borderColor: "#f7b924",
      borderCapStyle: "round",
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: "round",
      pointBorderColor: "#f7b924",
      pointBackgroundColor: "#fff",
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#f7b924",
    },
  ];

  public lineChartColors2: Color[] = [
    {
      // dark grey
      backgroundColor: "rgba(48, 177, 255, 0.2)",
      borderColor: "#30b1ff",
      borderCapStyle: "round",
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: "round",
      pointBorderColor: "#30b1ff",
      pointBackgroundColor: "#ffffff",
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: "#ffffff",
      pointHoverBorderColor: "#30b1ff",
    },
  ];

  lastTerminaux:any[]
  Lattitude
  Longitude
  constructor(private terminauxSRV:TerminauxService) {}

  ngOnInit(): void {

    this.terminauxSRV.getlast().subscribe((data:any[])=>{
      this.lastTerminaux=data
      
    })
  }
}
