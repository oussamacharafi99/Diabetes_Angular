import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import * as http from "http";
import {Observable} from "rxjs";
import {Glycemie} from "../modul/GlycemieModul";
import {GlycemieServiceService} from "../glycemie-service.service";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

   getAllGlycemie(): Observable<Glycemie[]>{
    return this.http.get<Glycemie[]>("http://localhost:8095/glycemieList")
  }
}
