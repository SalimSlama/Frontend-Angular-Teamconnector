import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http: HttpClient, private config: ConfigurationService) { }

  getalldepartements() {
    return this.http.get(this.config.baseUrl+"/getallDepartement");
  }
  adddepartements(data) {
    return this.http.post(this.config.baseUrl+"/addDepartement",data);
  }
  deletedep(id) {
    return this.http.delete(this.config.baseUrl+"/deletedep/" + id);
  }
}
