import { Component, OnInit } from '@angular/core';
import {Glycemie} from "../Module-app/Glycemie";
import {DataGlycemieService} from "../Service-app/data-glycemie.service";

@Component({
  selector: 'app-com-glycemie',
  templateUrl: './com-glycemie.component.html',
  styleUrls: ['./com-glycemie.component.css']
})
export class ComGlycemieComponent implements OnInit {

  GlycemieListAll: Glycemie[] = []

  constructor(private data: DataGlycemieService ) { }

  ngOnInit(): void {
    this.getAllGlycemie()
  }

   getAllGlycemie(){
     this.data.getAllGlycemie().subscribe(value =>
       this.GlycemieListAll = value
     )
   }
   deleteGlycemie(id: number){
    this.data.supprimer(id).subscribe(() => {
      this.getAllGlycemie();
    });
   }

}
