import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class DepartementUtilisateurService {

  constructor(private config: ConfigurationService,
    private http: HttpClient) { }
  getAlluserdepartment() {
    return this.http.get(this.config.baseUrl + "/getAlluserdepartment");
  }
  getuserdepartment(id) {
    return this.http.get(this.config.baseUrl + "/getuserdepartment/" + id);
  }
  getusersdepartments() {
    return this.http.get(this.config.baseUrl + "/getusersdepartments/");
  }
}
