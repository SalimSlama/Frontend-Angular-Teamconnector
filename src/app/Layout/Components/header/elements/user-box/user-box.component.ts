import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { AdministrateurService } from "src/app/services/administrateur.service";
import { ThemeOptions } from "../../../../../theme-options";

@Component({
  selector: "app-user-box",
  templateUrl: "./user-box.component.html",
})
export class UserBoxComponent implements OnInit {
  faCalendar = faCalendar;
  userid: any;
  user
  toggleDrawer() {
    this.globals.toggleDrawer = !this.globals.toggleDrawer;
  }

  constructor(
    public globals: ThemeOptions,
    private adminSRV: AdministrateurService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userid = this.adminSRV.CurrentUser.sub
    ////console.log(this.userid);

    this.adminSRV.getoneadmin(this.userid).subscribe((d) => {
      this.user = d
      //console.log(d);
    });


  }
  logout() {
    this.adminSRV.logout();
    this.router.navigate(['/userpages/login'])
  }
}
