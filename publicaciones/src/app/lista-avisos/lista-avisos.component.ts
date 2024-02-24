import { Component, OnInit } from '@angular/core';
import { AvisoService } from '../aviso.service';
import { ModalController } from '@ionic/angular';
import { ConfirmacionEliminacionComponent } from '../confirmacion-eliminacion/confirmacion-eliminacion.component';

@Component({
  selector: 'app-lista-avisos',
  templateUrl: './lista-avisos.component.html',
  styleUrls: ['./lista-avisos.component.scss']
})
export class ListaAvisosComponent implements OnInit {
avisos: any;
eliminarAviso: any;
volverAlFormulario: any;

  constructor(
    private avisoService: AvisoService,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    }

  async abrirConfirmacionEliminacion() {
    const modal = await this.modalController.create({
      component: ConfirmacionEliminacionComponent
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data && data.confirmado) {
     }
  }
  }
