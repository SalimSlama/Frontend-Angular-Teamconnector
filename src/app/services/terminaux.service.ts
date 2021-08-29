import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigurationService } from "./configuration.service";

@Injectable({
  providedIn: "root",
})
export class TerminauxService {
  constructor(private http: HttpClient, private config: ConfigurationService) { }

  getTerminaux() {
    return this.http.get(this.config.baseUrl + "/getallEtatTerminal");
  }

  getlast() {
    return this.http.get(this.config.baseUrl + "/getlast");

  }
  getAllTerminaux() {
    return this.http.get(this.config.baseUrl + "/getallTerminaux");
  }
  getOneTerminal(id) {
    return this.http.get(this.config.baseUrl + "/getOneTerminal/" + id);
  }

  getnameTerminal(id) {
    return this.http.get(this.config.baseUrl + "/getnameTerminal/" + id);
  }
  updatenameTerminal(id, data) {
    return this.http.put(this.config.baseUrl + "/editTerminal/" + id, data);
  }
}
