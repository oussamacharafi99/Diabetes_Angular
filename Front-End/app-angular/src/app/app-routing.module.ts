import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGlycemieComponent } from './add-glycemie/add-glycemie.component';
import { ComGlycemieComponent } from './com-glycemie/com-glycemie.component';
import {UpdateGlycemieComponentComponent} from "./update-glycemie-component/update-glycemie-component.component";

const routes: Routes = [
  { path: 'add', component: AddGlycemieComponent },
  { path: 'show', component: ComGlycemieComponent },
  {path:"edit/:id",component:UpdateGlycemieComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
