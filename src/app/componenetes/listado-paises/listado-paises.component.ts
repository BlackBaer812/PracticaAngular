import { Component } from '@angular/core';
import { Pais } from '../../interface/pais';
import { PaisesService } from '../../servicios/paises.service';
import { ArticulosService } from '../../servicios/articulos.service';

@Component({
  selector: 'app-listado-paises',
  standalone: true,
  imports: [],
  templateUrl: './listado-paises.component.html',
  styleUrl: './listado-paises.component.css'
})
export class ListadoPaisesComponent {
  paises: Pais[] = [];

  constructor(private paisesService: PaisesService, private paisesService2: ArticulosService) {
    this.recuperar();
    this.recuperar2();
  }

  recuperar() {
    this.paisesService.retornar().subscribe((paises: Pais[]) => {
      this.paises = paises
    });
  }

  recuperar2() {
    this.paisesService2.retornarPaises().subscribe((paises: Pais[]) => {
      this.paises = paises
    });
  }
}
