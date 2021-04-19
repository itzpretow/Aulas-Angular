import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component'
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { ExperimentsComponent } from './experiments/experiments.component'
import { ReadMeGeneratorComponent } from './read-me-generator/read-me-generator.component'
import { EvAndRefComponent } from './ev-and-ref/ev-and-ref.component'
import { FichaAnimalComponent } from './ficha-animal/ficha-animal.component'
import { EscolheAnimalComponent } from './escolhe-animal/escolhe-animal.component'
import { AnimalReaderComponent } from './ficha-animal/animal-reader/animal-reader.component'

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'calculadora', component: CalculadoraComponent},
  {path:'nav-bar', component: NavBarComponent},
  {path:'experiments', component: ExperimentsComponent},
  {path:'read-me-generator', component: ReadMeGeneratorComponent},
  {path:'ev-and-ref-component', component: EvAndRefComponent},
  {path:'ficha-animal', component: FichaAnimalComponent},
  {path:'escolhe-animal', component: EscolheAnimalComponent},
  {path:'animal-reader', component: AnimalReaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
