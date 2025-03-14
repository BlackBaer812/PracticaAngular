import { Component, QueryList, ViewChild, ViewChildren, AfterViewInit, ElementRef, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AlumnosComponent } from "./alumnos/alumnos.component";
import { DadoComponent } from "./dado/dado.component";
import { InicialComponent } from "./inicial/inicial.component";
import { CronometroComponent } from './cronometro/cronometro.component';
import { ValoresComponent } from './valores/valores.component';
import { BarraAriaComponent } from './barra-aria/barra-aria.component';
import { Formulario1Component } from './formulario1/formulario1.component';
import { FormReactivoComponent } from './form-reactivo/form-reactivo.component';
import { PMaterialComponent } from './p-material/p-material.component';
import { FormularioMatrialComponent } from './formulario-matrial/formulario-matrial.component';
import { Card1Component } from './card1/card1.component';
import { VacioComponent } from './vacio/vacio.component';
import { ArticulosService } from './servicios/articulos.service';
import { EmergenteStrService } from './servicios/emergente-str.service';
import { ModDinamicaComponent } from './mod-dinamica/mod-dinamica.component';
import { ModTextoDinamicoComponent } from './mod-texto-dinamico/mod-texto-dinamico.component';
import { DragDropComponent } from './componenetes/drag-drop/drag-drop.component';
import { FormAgendaComponent } from './componenetes/form-agenda/form-agenda.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PMaterialComponent,
    FormularioMatrialComponent,
    ReactiveFormsModule,
    FormReactivoComponent, 
    Formulario1Component,
    AlumnosComponent,
    DadoComponent,
    InicialComponent,
    CronometroComponent,
    ValoresComponent,
    BarraAriaComponent,
    Card1Component, 
    RouterLink,
    VacioComponent,
    ModDinamicaComponent,
    ModTextoDinamicoComponent,
    DragDropComponent,
    FormAgendaComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  articulos:any;
  articulos1: any;

  constructor(private articulosServicios:ArticulosService, private emergente:EmergenteStrService){
    this.articulos = this.articulosServicios.retornar();
    this.articulosServicios.retornarGet().subscribe(result => this.articulos1 = result)
  }

  @Input() time:number = 1200;
  @ViewChildren(DadoComponent) dados!:QueryList<DadoComponent>;


  async tirarTodos2(t:Array<DadoComponent>){
    this.deshabilitar()

    const numeros = await Promise.all(t.map(dado => dado.tirar()));

    
    this.habilitar()

    if(this.emergente.victoria(numeros)){
      alert("Los 4 son iguales")
    }
  }

  tirarTodos(){
    this.dados.forEach(dado =>{
      dado.tirar()
    } );
  }

  deshabilitar(){
    let todos = document.getElementById("todos");
    let todos2 = document.getElementById("todos2");
    let cambio = document.getElementById("cambioVelo");
    todos?.setAttribute("disabled","true");
    todos2?.setAttribute("disabled","true");
    cambio?.setAttribute("disabled","true");
  }

  habilitar(){
    let todos = document.getElementById("todos");
    let todos2 = document.getElementById("todos2");
    let cambio = document.getElementById("cambioVelo");
    todos?.removeAttribute("disabled");
    todos2?.removeAttribute("disabled");
    cambio?.removeAttribute("disabled");
  }

  tCambio = new FormControl();

  cambiarVelocidad(){
    this.time = this.tCambio.value;
    this.tCambio.setValue('');
  }


  valor1: number = 0;
  valor2: number = 0;
  valor3: number = 0;
  resultado: string = "";

  mensaje = '';

  actualizar(t: number) {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
  
  fijarSelector(numero: number, selector: ValoresComponent){
    selector.fijar(numero);
    
  }

  currentProgress = 0;
  maximo = 100;
  increaseProgress() {
      if (this.currentProgress < this.maximo) {
        this.currentProgress += 10;
      }
      else{
        this.currentProgress = 0;
      }
    }
   

    
}

