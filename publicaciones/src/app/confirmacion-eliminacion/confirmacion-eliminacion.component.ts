import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirmacion-eliminacion',
  templateUrl: './confirmacion-eliminacion.component.html',
  styleUrls: ['./confirmacion-eliminacion.component.scss']
})
export class ConfirmacionEliminacionComponent {
  @Output() confirmado = new EventEmitter<boolean>();

  confirmar() {
    this.confirmado.emit(true);
  }

  cancelar() {
    this.confirmado.emit(false);
  }
}
