import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../ofertas.service';
import { Ofertas } from '../shared/oferta.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[OfertaService]
})
export class HomeComponent implements OnInit {

  constructor(private ofertaService : OfertaService) { }

  ofertas :  Ofertas[];

  ngOnInit(): void {
    this.ofertas = this.ofertaService.getOfertas();
    console.log(this.ofertas);
  }

}
