import { Component, OnInit } from '@angular/core';

import { DetalleReserva, detallesreservas } from '../../modelo/detallereserva.class';


@Component({
  selector: 'app-descripcion-boleta-main',
  templateUrl: './descripcion-boleta-main.component.html',
  styleUrls: ['./descripcion-boleta-main.component.css']
})
export class DescripcionBoletaMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  detallesreservas:DetalleReserva[]=detallesreservas
  productos= this.detallesreservas.filter(elemen => elemen.getReservas.getcodReserva()=="R0001");

  

}



