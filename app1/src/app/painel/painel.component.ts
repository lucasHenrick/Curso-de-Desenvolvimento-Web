import { Component, OnInit,EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from  '../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  frases : Frase[] = FRASES;
  instrucao : string = "Traduza a frase:";
  resposta : string = '';
  rodada: number = 0;
  rodadaFrase: Frase;
  progresso : number = 0;
  tentativas: number = 3;
  @Output() encerrarJogo: EventEmitter<string> = new EventEmitter();
  constructor() {
    this.atualizaRodada();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("destrudido")
  }

  atualizarResposta(resposta : Event) : void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  verificarResposta (): void{
    //trocar pergunta da rodada
    if(this.resposta === this.frases[this.rodada].frasePtBr){
  
      this.progresso = this.progresso + (100 / this.frases.length);
      this.rodada = this.rodada + 1;
      this.atualizaRodada();
      if(this.rodada === this.frases.length){
        this.encerrarJogo.emit("Vitoria");
      }
    }else{
      this.tentativas--;
      if(this.tentativas === -1){

        this.encerrarJogo.emit("Derrota");
      }

    }
  }
  atualizaRodada(): void{
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
