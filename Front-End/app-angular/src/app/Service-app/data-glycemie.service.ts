import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Glycemie} from "../Module-app/Glycemie";

@Injectable({
  providedIn: 'root'
})
export class DataGlycemieService {
  api: string = "http://localhost:8095/glycemieList";

  constructor(private http: HttpClient) {
  }

  public getAllGlycemie():Observable<Array<Glycemie>>{
    return this.http.get<Array<Glycemie>>(this.api);
  }

}
