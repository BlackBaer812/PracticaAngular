import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  private tareaSubject = new BehaviorSubject<any[]>(this.obtenerTareas())
  tareas$ = this.tareaSubject.asObservable()

  constructor() { }

  obtenerTareas(): any[] {
    const tareas = localStorage.getItem('misNotas');
    return tareas ? JSON.parse(tareas) : [];
  }

  agregarTarea(tarea: any): void {
    const tareas = this.obtenerTareas();
    tarea.id = tareas.length + 1;
    tareas.push(tarea);
    localStorage.setItem('misNotas', JSON.stringify(tareas));
    this.tareaSubject.next(tareas);
  }

  actualizarTareas(tareas: any[]): void {
    localStorage.setItem('misNotas', JSON.stringify(tareas));
    this.tareaSubject.next(tareas);  // Emitir el nuevo estado de las tareas
  }
}
