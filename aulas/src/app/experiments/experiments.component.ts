import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  name : string = "João";

  changeName(event){
    this.name = event.target.value;
  }

  arrayDeComida : Array<string> = ["Francesinha", "Picanha", "Churrasco", "Hamburger"];

  analisarReferencia(referencia){
    console.log(referencia);
  }
}
