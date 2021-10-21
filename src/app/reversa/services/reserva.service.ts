import { Injectable } from "@angular/core";
import { DetalleReserva, detallesreservas } from "src/app/modelo/detallereserva.class";


@Injectable()
export class ReservaService{
  detallesreservas:DetalleReserva[]=detallesreservas
  
  get getproductos():DetalleReserva[]{
      const detallesreservas= this.detallesreservas.filter(elemen => elemen.getReservas.getcodReserva()=="R0001"); 
      return detallesreservas

          
  }
  total(detallereserva:DetalleReserva[]):number{
    let cant:number=0
    detallereserva.forEach(element => {
    cant = cant+(element.getproductoDetalleReserva.getprecioproductolocal()*element.getcantiaddDEtalleReserva) 
    }); 
    return cant
  }
    
}