import { Component } from '@angular/core';

@Component({
  selector: 'app-inicial',
  standalone: true,
  imports: [],
  templateUrl: './inicial.component.html',
  styleUrl: './inicial.component.scss'
})
export class InicialComponent {
  title = 'world';
  nombre = 'Rodriguez Pablo';
  edad = 40;
  email = 'rpablo@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;

  esActivo() {
    if (this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador Inactivo';
  }

  ultimos3Sueldos() {
    let suma = 0;
    for (let x = 0; x < this.sueldos.length; x++)
      suma += this.sueldos[x];
    return suma;
  }

  articulos = [{
    codigo: 1,
    descripcion: 'naranjas',
    precio: 540
  },{
    codigo: 2,
    descripcion: 'manzanas',
    precio: 900
  },{
    codigo: 3,
    descripcion: 'peras',
    precio: 490
  }];

  generarNumero() {
    return Math.floor(Math.random() * 3) + 1;
  }

  contador = 0

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }

  nombre2 = ''

  fijarNombre1() {
    this.nombre2 = 'Juan';
  }

  fijarNombre2() {
    this.nombre2 = 'Ana';
  }
}
