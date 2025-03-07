import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComunicacionService } from '../../servicios/comunicacion.service';

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
    fechaA: new Date(),
    fechaL: "",
    comentario: "",
    completada: false
  }

  constructor(private coms:ComunicacionService){}

  agregarNota(){

    this.coms.agregarTarea(this.actividad)

    this.actividad = {
      id: 0,
      titulo: "",
      fechaA: new Date(),
      fechaL: "",
      comentario: "",
      completada: false
    }
  }
}
