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
  todo: any[] = [];

  done: any[] = [];

  constructor(private coms: ComunicacionService){ }

  ngOnInit() {
    this.coms.tareas$.subscribe(tareas =>{
      this.todo = tareas
    })
  }

  cargarTareas(){
    const cargaTareas = localStorage.getItem("misNotas");

    if(cargaTareas){
      const tareas = JSON.parse(cargaTareas);

      this.todo = tareas;
    }
  }

  //done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
