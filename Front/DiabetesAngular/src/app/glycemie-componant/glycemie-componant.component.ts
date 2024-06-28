import {Component, OnInit} from '@angular/core';
import {GlycemieServiceService} from "../glycemie-service.service";
import {Glycemie} from "../modul/GlycemieModul";
import {ServiceService} from "../Services/service.service";

@Component({
  selector: 'app-glycemie-componant',
  standalone: true,
  imports: [],
  templateUrl: './glycemie-componant.component.html',
  styleUrl: './glycemie-componant.component.css'
})
export class GlycemieComponantComponent implements OnInit{
  glycemieList : Glycemie[] = []
  constructor(private service:ServiceService) {
  }
  ngOnInit(): void {
    this.service.getAllGlycemie().subscribe(
      value => {
        this.glycemieList=value
      }
    )
  }


}
