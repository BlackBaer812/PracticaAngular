import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-agenda',
  imports: [FormsModule],
  templateUrl: './form-agenda.component.html',
  styleUrl: './form-agenda.component.scss'
})
export class FormAgendaComponent {
  actividad = {
    id: 0,
    titulo: "",
    fechaA: undefined,
    fechaL: undefined,
    comentario: ""
  }

  agregarNota(){
    console.log(this.actividad.titulo,this.actividad.fechaL,this.actividad.comentario)
  }
}
