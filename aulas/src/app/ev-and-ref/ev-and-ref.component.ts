import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tamanhoLetra : number = 15
  cor:string="white";

  changeColor(corR:string){
    this.cor = corR;
  }

  trocarFundo(referBtn){
    referBtn.backgroundColor = "black";
  }

  trocarCorLetra(referBtn){
    referBtn.color = "white";
  }

  trocarTamanhoLetra(referBtn){
    this.tamanhoLetra++;
    referBtn.fontSize=""+this.tamanhoLetra+"px";
  }
}
