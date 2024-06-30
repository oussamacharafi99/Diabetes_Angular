import { Component, OnInit } from '@angular/core';
import {Glycemie} from "../Module-app/Glycemie";
import {DataGlycemieService} from "../Service-app/data-glycemie.service";
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-com-glycemie',
  templateUrl: './com-glycemie.component.html',
  styleUrls: ['./com-glycemie.component.css']
})
export class ComGlycemieComponent implements OnInit {

  GlycemieListAll: Glycemie[] = []
  chart: Chart | undefined;

  constructor(private data: DataGlycemieService ) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.getAllGlycemie()
  }

   getAllGlycemie(){
     this.data.getAllGlycemie().subscribe(value =>{
       this.GlycemieListAll = value
       this.chartFunction()
     })
   }
   deleteGlycemie(id: number){
    this.data.supprimer(id).subscribe(() => {
      this.getAllGlycemie();
    });
   }

   chartFunction(){
     const dateElements = this.GlycemieListAll.map(g => g.date);
     const valueElements = this.GlycemieListAll.map(g => g.valeur);
     const ctx = (document.getElementById('chart-1') as HTMLCanvasElement).getContext('2d');
     if (ctx) {
       if (this.chart) {
         this.chart.destroy();
       }

       this.chart = new Chart(ctx, {

         type: 'line',
         data: {
           labels: dateElements,
           datasets: [{
             label: 'Valeurs de Glycémie',
             data: valueElements,
             borderColor: 'rgba(75, 192, 192, 1)',
             borderWidth: 1,
             fill: false
           }]
         },
         options: {
           scales: {
             y: {
               beginAtZero: true
             }
           }
         }
       });
     }
   }

}
