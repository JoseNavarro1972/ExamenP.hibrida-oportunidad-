import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {
  CrearAvisos() {
    throw new Error('Method not implemented.');
  }
  eliminarAviso(id: number) {
    throw new Error('Method not implemented.');
  }
  obtenerAvisosUsuario() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  guardarAviso({ titulo, tipoAviso, descripcion }: { titulo: string; tipoAviso: string; descripcion: string; }): Observable<any> {
    // Aquí realizas la lógica para guardar el aviso y devuelves un observable
    return this.http.post<any>('url_para_guardar_el_aviso', { titulo, tipoAviso, descripcion });
  }
}
