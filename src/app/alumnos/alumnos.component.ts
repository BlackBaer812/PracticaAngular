import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})

export class AlumnosComponent {
  mapa: Map<string,string>

  constructor(){
    this.mapa = new Map([
      ["jose","maria"],
      ["Teresa","pedro"]
    ])
  }
  

}
