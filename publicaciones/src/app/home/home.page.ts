import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  titulo: string = ''; // Inicializa las variables
  tipoAviso: string = '';
  descripcion: string = '';

  constructor() {}

  agregarFoto(): void {
    // Aquí puedes implementar la lógica para agregar una foto
    console.log('Agregar foto');
  }

  guardarAviso(): void {
    if (this.validarFormulario()) {
      // Aquí deberías implementar la lógica para guardar el aviso
      console.log('Guardando aviso...');
      console.log('Título:', this.titulo);
      console.log('Tipo de aviso:', this.tipoAviso);
      console.log('Descripción:', this.descripcion);
    }
  }

  validarFormulario(): boolean {
    if (this.titulo.length < 5) {
      console.error('El título debe tener al menos 5 caracteres');
      return false;
    }
    if (this.descripcion.length < 20) {
      console.error('La descripción debe tener al menos 20 caracteres');
      return false;
    }
    return true;
  }
}
