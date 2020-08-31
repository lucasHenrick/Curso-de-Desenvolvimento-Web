import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';
@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  
  @Input() tentativas: number;


  coracaos : Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges(): void {
    if(this.tentativas !== this.coracaos.length){
      
      let indice: number = this.coracaos.length - this.tentativas;
      
      this.coracaos[indice - 1].coracao = false;
    }
  }
}
