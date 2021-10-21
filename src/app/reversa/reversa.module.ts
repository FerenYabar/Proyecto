import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversaMainComponent } from './reversa-main/reversa-main.component';
import { ReservaService } from './services/reserva.service';



@NgModule({
  declarations: [
    ReversaMainComponent
  ],
  exports:[
    ReversaMainComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    ReservaService
  ]
})
export class ReversaModule { }
