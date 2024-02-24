import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
