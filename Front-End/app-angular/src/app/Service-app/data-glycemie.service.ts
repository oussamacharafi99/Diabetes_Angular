import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Glycemie} from "../Module-app/Glycemie";

@Injectable({
  providedIn: 'root'
})
export class DataGlycemieService {
  api: string = "http://localhost:8095/glycemieList";
  apiAdd: string ="http://localhost:8095/addGlycemie"
  apiDelet: string =`http://localhost:8095/deleteGlycemie`;
  apiUpdate: string =`http://localhost:8095/updateGlycemie`;
  apiFind: string =`http://localhost:8095/Find`;

  constructor(private http: HttpClient) {
  }

  public getAllGlycemie():Observable<Array<Glycemie>>{
    return this.http.get<Array<Glycemie>>(this.api);
  }

  public addGlycemie(glycemie: Glycemie): Observable<Glycemie> {
    return this.http.post<Glycemie>(this.apiAdd, glycemie);
  }

  public supprimer(id: number){
    return this.http.delete(this.apiDelet + "/" + id)
  }
  public findGlycemie(id:number){
    return this.http.get(this.apiFind + "/" + id )
  }

  public update(id: number , glycemie : Glycemie){
    return this.http.put(this.apiUpdate + "/" + id, glycemie)
  }
}
