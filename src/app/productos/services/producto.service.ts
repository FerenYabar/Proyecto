import { Injectable } from "@angular/core";
import { DetalleReserva, detallesreservas } from "src/app/modelo/detallereserva.class";
import { ProductoLocal, productoslocal } from "src/app/modelo/productolocal.class";
import { reservas } from "src/app/modelo/reserva.class";

@Injectable()
export class ProductoService{
productoslocal:ProductoLocal[]=productoslocal;

agregar(productolocal:ProductoLocal){
let nuevodetallereserva = new DetalleReserva('R0001',1,productolocal,reservas[0])   
detallesreservas.push(nuevodetallereserva)
}
}
