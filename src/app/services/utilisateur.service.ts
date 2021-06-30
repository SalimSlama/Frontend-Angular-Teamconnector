import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient, private config: ConfigurationService) { }
  addutilisateurs(data) {
    return this.http.post(this.config.baseUrl+"/addUtilisateur",data);
  }
  getallutilisateurs() {
    return this.http.get(this.config.baseUrl+"/getallUtilisateur");
  }
  deleteutilisateur(id) {
    return this.http.delete(this.config.baseUrl+"/deleteutilisateur/" + id);
  }
  getoneutilisateur(id){
    return this.http.get(this.config.baseUrl+"/getoneutilisateur/" + id);
  }
  updateutilisateur(id, data){
    return this.http.put(this.config.baseUrl+"/updateutilisateur/" + id, data);
  }
}
