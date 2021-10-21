import { Component, OnInit } from '@angular/core';
import { productoslocal, ProductoLocal } from '../../modelo/productolocal.class';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-productos-main',
  templateUrl: './productos-main.component.html',
  styleUrls: ['./productos-main.component.css']
})
export class ProductosMainComponent implements OnInit {

  constructor(public productoService:ProductoService) {   
  }

  ngOnInit(): void {
  }
  

}
// console.log(productoslocal[0].producto.getimagenproducto())