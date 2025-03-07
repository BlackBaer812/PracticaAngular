import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  private tareas: any[] = this.obtenerTareas();

  private todoSubject = new BehaviorSubject<any[]>(this.tareas.filter(t => !t.completada));
  private doneSubject = new BehaviorSubject<any[]>(this.tareas.filter(t => t.completada));

  todo$ = this.todoSubject.asObservable();
  done$ = this.doneSubject.asObservable();

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
    this.todoSubject.next(tareas.filter(t => !t.completada));
    this.doneSubject.next(tareas.filter(t => t.completada));
  }

  actualizarTareas(todo: any[], done:any[]): void {
    const tareasActualizadas = [...todo, ...done];

    localStorage.setItem('misNotas', JSON.stringify(tareasActualizadas));

    
    this.todoSubject.next(todo);
    this.doneSubject.next(done);
  }
}
