import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {DataGlycemieService} from "../Service-app/data-glycemie.service";
import {Glycemie} from "../Module-app/Glycemie";

@Component({
  selector: 'app-update-glycemie-component',
  templateUrl: './update-glycemie-component.component.html',
  styleUrls: ['./update-glycemie-component.component.css']
})
export class UpdateGlycemieComponentComponent implements OnInit {

  id:any
  glycemieForm:any;

  constructor(private route:ActivatedRoute ,private fb:FormBuilder,private glycemieservice:DataGlycemieService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.initForm()
    this.glycemieservice.findGlycemie(this.id).subscribe((res:any)=>{
        this.glycemieForm.patchValue(
          {
            valeur:res.valeur,
            heures:res.heures,
            date:res.date

          }
        )
console.log("ussaaamaaa"+this.glycemieservice.findGlycemie(this.id))
      }
    )

  }
  initForm(){
    this.glycemieForm = this.fb.group({
      valeur: [''],
      heures: [''],
      date: ['']
    });
  }


  update(){
    const dataValue:Glycemie = {
      id:this.id,
      valeur:this.glycemieForm.value.valeur,
      heures:this.glycemieForm.value.heures,
      date:this.glycemieForm.value.date
    }
    console.log("salmaaaaaaaaaaaaaa"+dataValue.date)
    console.log("salmaaaaaaaaaaaaaa"+dataValue.heures)
    console.log("salmaaaaaaaaaaaaaa"+dataValue.valeur)
    this.glycemieservice.update(this.id,dataValue).subscribe()


  }



}
