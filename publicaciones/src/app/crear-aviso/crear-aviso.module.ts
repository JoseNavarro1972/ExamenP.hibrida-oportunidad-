import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; 
import { CrearAvisoComponent } from './crear-aviso.component'; 
@NgModule({
  declarations: [CrearAvisoComponent], 
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [CrearAvisoComponent] 
})
export class CrearAvisoModule {}
