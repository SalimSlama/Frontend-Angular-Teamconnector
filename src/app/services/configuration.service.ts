import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ConfigurationService {
  baseUrl = "http://192.168.1.48:8000/api";
  constructor(private http: HttpClient) {}
}
