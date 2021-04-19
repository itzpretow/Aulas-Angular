export class Animal {

  nome : string;
  nomeDono: string;
  especie : string;
  imagem : string;
  dataProximaConsulta : Date | undefined;

  constructor(nome:string, nomeDono:string, especie:string, imagem:string){
    this.dataProximaConsulta = undefined;
    this.nome = nome;
    this.nomeDono = nomeDono;
    this.especie = especie;
    this.imagem = imagem;
  }

}
