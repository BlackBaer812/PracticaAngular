import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { DatePipe } from '@angular/common';
import { ComunicacionService } from '../../servicios/comunicacion.service';

@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [CdkDropList, CdkDrag, DatePipe],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.css'
})
export class DragDropComponent {
  todo: { titulo: string, fechaL:string, completada: boolean }[] = [];

  done: { titulo: string, fechaL:string, completada: boolean }[] = [];

  constructor(private coms: ComunicacionService){ }

  ngOnInit() {
    this.coms.todo$.subscribe(tareas => this.todo = tareas);
    this.coms.done$.subscribe(tareas => this.done = tareas);
  }

  cargarTareas(){
    const cargaTareas = localStorage.getItem("misNotas");

    if(cargaTareas){
      const tareas = JSON.parse(cargaTareas);

      this.todo = tareas;
    }
  }

  //done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<{ titulo: string, fechaL: string, completada: boolean }[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      event.container.data[event.currentIndex].completada = !event.container.data[event.currentIndex].completada;
    }
    this.coms.actualizarTareas(this.todo, this.done);
  }
}
