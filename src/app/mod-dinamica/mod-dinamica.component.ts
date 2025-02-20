import { NgClass } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-mod-dinamica',
  standalone: true,
  imports: [NgClass],
  templateUrl: './mod-dinamica.component.html',
  styleUrl: './mod-dinamica.component.css'
})
export class ModDinamicaComponent {
  activo:boolean[] = [false,false,false]

  contador:number = 0;

  intervalo: any;

  iSemaforo(){
    if(this.intervalo) return;

    this.activo[this.contador] = true;

    this.intervalo =setInterval(() => {
      console.log(this.activo)
      this.activo = [false, false, false];
      this.contador++;
      this.activo[this.contador%3]=true;
    }, 3000);
  }
}
