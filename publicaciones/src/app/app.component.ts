import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-aviso',
  templateUrl: './crear-aviso.component.html',
  styleUrls: ['./crear-aviso.component.scss'],
})
export class CrearAvisoComponent implements OnInit {
  private _titulo!: string;
  public get titulo(): string {
    return this._titulo;
  }
  public set titulo(value: string) {
    this._titulo = value;
  }
  tipoAviso!: string;
  descripcion!: string;

  constructor() { }

  ngOnInit() {}

  guardarAviso() {
    // Aquí iría la lógica para guardar el aviso
  }
}












































































































