import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigurationService } from "./configuration.service";

@Injectable({
  providedIn: "root",
})
export class TerminauxService {
  constructor(private http: HttpClient, private config: ConfigurationService) {}

  getTerminaux() {
    return this.http.get(this.config.baseUrl + "/getallEtatTerminal");
  }
  
  getlast(){
    return this.http.get(this.config.baseUrl + "/getlast");

  }
}
