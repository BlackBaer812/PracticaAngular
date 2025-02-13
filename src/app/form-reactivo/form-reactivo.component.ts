import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-reactivo.component.html',
  styleUrl: './form-reactivo.component.scss'
})
export class FormReactivoComponent {
  actividad1 = new FormControl();
  lugar = new FormControl();

  lista: Array<Array<string>>;

  constructor() {
    this.lista = [];
    let datos = localStorage.getItem("actividades");
    if (datos != null) {
      let arreglo = JSON.parse(datos);
      if (arreglo != null)
        for (let actividad of arreglo)
          this.lista.push(actividad);
    }
  }

  agregar() {
    this.lista.push([this.actividad1.value, this.lugar.value]);
    localStorage.setItem('actividades', JSON.stringify(this.lista));
    this.actividad1.setValue('');
  }

  borrar(pos: number) {
    this.lista.splice(pos, 1);
    localStorage.clear();
    localStorage.setItem('actividades', JSON.stringify(this.lista));
  }

  borrarTodas() {
    localStorage.clear();
    this.lista = [];
  }
}
