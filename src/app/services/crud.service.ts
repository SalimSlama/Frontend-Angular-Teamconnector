import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
 

  constructor(private http: HttpClient , private config:ConfigurationService) {

   }

   getallEtat() {
    return this.http.get(this.config.baseUrl+"/getallEtatTerminal");
  }

  register(data){
    return this.http.post(this.config.baseUrl+"/register", data);

  }
}
