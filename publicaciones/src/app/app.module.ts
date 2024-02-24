import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { CrearAvisoModule } from './crear-aviso/crear-aviso.module'; // Importa el módulo aquí
import { AvisoService } from './aviso.service'; 
import { ListaAvisosComponent } from './lista-avisos/lista-avisos.component';

@NgModule({
  declarations: [
    ListaAvisosComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    CrearAvisoModule // Importa y declara el módulo aquí
  ],
  providers: [
    AvisoService
  ],
  bootstrap: [] 
})
export class AppModule {}
