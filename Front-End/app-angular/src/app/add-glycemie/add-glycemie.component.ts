import { Component } from '@angular/core';
import { DataGlycemieService } from '../Service-app/data-glycemie.service';
import { Glycemie } from '../Module-app/Glycemie';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-glycemie',
  templateUrl: './add-glycemie.component.html',
  styleUrls: ['./add-glycemie.component.css']
})
export class AddGlycemieComponent {
  glycemieForm: FormGroup;

  constructor(private fb: FormBuilder, private glycemieService: DataGlycemieService) {
    this.glycemieForm = this.fb.group({
      valeur: ['', Validators.required],
      heures: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.glycemieForm.valid) {
      const newGlycemie: Glycemie = this.glycemieForm.value;
      this.glycemieService.addGlycemie(newGlycemie).subscribe(response => {
        console.log('Glycemie ajoutée avec succès!', response);
        this.glycemieForm.reset();
      }, error => {
        console.error('Erreur lors de l\'ajout de la glycémie', error);
      });
    }
  }
 /* onRender(){
    location.reload();
  }*/
}
