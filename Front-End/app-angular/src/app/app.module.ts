import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComGlycemieComponent } from './com-glycemie/com-glycemie.component';
import { AddGlycemieComponent } from './add-glycemie/add-glycemie.component';
import { HeaderComponent } from './header/header.component';
import { UpdateGlycemieComponentComponent } from './update-glycemie-component/update-glycemie-component.component';
import { HeroComponent } from "./hero/hero.component";

@NgModule({
  declarations: [
    AppComponent,
    ComGlycemieComponent,
    AddGlycemieComponent,
    HeaderComponent,
    UpdateGlycemieComponentComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
