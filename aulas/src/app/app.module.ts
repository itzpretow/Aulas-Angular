import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ReadMeGeneratorComponent } from './read-me-generator/read-me-generator.component';
import { HomeComponent } from './home/home.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { FormsModule } from '@angular/forms';
import { EvAndRefComponent } from './ev-and-ref/ev-and-ref.component';
import { FichaAnimalComponent } from './ficha-animal/ficha-animal.component';
import { EscolheAnimalComponent } from './escolhe-animal/escolhe-animal.component';
import { CookiesComponent } from './cookies/cookies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CalculadoraComponent,
    ReadMeGeneratorComponent,
    HomeComponent,
    ExperimentsComponent,
    EvAndRefComponent,
    FichaAnimalComponent,
    EscolheAnimalComponent,
    CookiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
