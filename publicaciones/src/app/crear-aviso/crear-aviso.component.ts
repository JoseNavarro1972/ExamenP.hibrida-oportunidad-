import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvisoService } from '../aviso.service';

@Component({
  selector: 'app-crear-aviso',
  templateUrl: './crear-aviso.component.html',
  styleUrls: ['./crear-aviso.component.scss']
})
export class CrearAvisoComponent {
  avisoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private avisoService: AvisoService) {
    this.avisoForm = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      mascotaPerdida: [false],
      descripcion: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  guardarAviso() {
    if (this.avisoForm.valid) {
      // Guardar aviso
      this.avisoService.guardarAviso({
        titulo: this.avisoForm.value.titulo,
        tipoAviso: 'tipo_de_aviso', // Asigna un valor adecuado para tipoAviso
        descripcion: this.avisoForm.value.descripcion
      }); 
    } else {
      this.avisoForm.markAllAsTouched(); 
    }
  }
  getErrorMensaje(controlName: string) {
    const control = this.avisoForm.get(controlName);
    if (control && control.errors) { 
      if (control.errors['required']) {
        return 'Este campo es obligatorio';
      } else if (control.errors['minlength']) {
        return `Debe tener al menos ${control.errors['minlength'].requiredLength} caracteres`;
      }
    }
    return '';
  }
}
