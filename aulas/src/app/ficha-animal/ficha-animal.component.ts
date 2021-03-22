import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ficha-animal',
  templateUrl: './ficha-animal.component.html',
  styleUrls: ['./ficha-animal.component.css']
})
export class FichaAnimalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  animal : string;
  arrayAnimais : Array<string> = ["Cão", "Gato", "Panda", "Texugo"];

}
