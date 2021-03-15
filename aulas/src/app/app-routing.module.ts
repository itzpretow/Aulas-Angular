import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component'
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { ExperimentsComponent } from './experiments/experiments.component'
import { ReadMeGeneratorComponent } from './read-me-generator/read-me-generator.component'

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'calculadora', component: CalculadoraComponent},
  {path:'nav-bar', component: NavBarComponent},
  {path:'experiments', component: ExperimentsComponent},
  {path:'read-me-generator', component: ReadMeGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
