import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {

  constructor(private http: HttpClient, private config: ConfigurationService,) { }

  getalladmin() {
    return this.http.get(this.config.baseUrl + "/getallusers");
  }
  getoneadmin(id) {
    return this.http.get(this.config.baseUrl + "/getoneadmin/" + id);
  }
  deleteadmin(id) {
    return this.http.delete(this.config.baseUrl + "/deleteadmin/" + id);
  }
  login(user) {
    return this.http.post(this.config.baseUrl + "/login/", user);
  }
  logout() {
    localStorage.removeItem('token');
  }
  get CurrentUser() {
    let token = localStorage.getItem('token')
    if (!token)
      return null
    return new JwtHelperService().decodeToken(token);
  }
}
