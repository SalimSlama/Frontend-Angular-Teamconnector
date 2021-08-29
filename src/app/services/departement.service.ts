import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private resultSubject = new Subject<string>();

  constructor(private http: HttpClient, private config: ConfigurationService) { }

  getalldepartements() {
    return this.http.get(this.config.baseUrl + "/getallDepartement");
  }
  adddepartements(data) {
    return this.http.post(this.config.baseUrl + "/addDepartement", data);
  }
  deletedep(id) {
    return this.http.delete(this.config.baseUrl + "/deletedep/" + id);
  }
  updatedepartement(id, data) {
    return this.http.put(this.config.baseUrl + "/editdepartement/" + id, data);
  }
  getonedepartement(id) {
    return this.http.get(this.config.baseUrl + "/getonedepartement/" + id);
  }
  gettrasheddepartements() {
    return this.http.get(this.config.baseUrl + "/getonlytrashed");
  }
  restoredepartement(id, data) {
    return this.http.post(this.config.baseUrl + "/restoredepartement/" + id, data);
  }


  dispatchDepartmentsCreated(id: string) {
    this.resultSubject.next(id);
  }

  handleDepartmentsCreated() {
    return this.resultSubject.asObservable();
  }
}
