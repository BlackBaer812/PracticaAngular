import { query } from '@angular/animations';
import { ChangeDetectionStrategy,Component, Input, Output, Renderer2, ViewChild, ElementRef } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { NgClass } from '@angular/common';
import { ResaltadoDirective } from '../directivas/resaltado.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card1',
  standalone:true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, CurrencyPipe,NgClass, ResaltadoDirective, FormsModule],
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component {
  @Input() nombre:string = "Nombre";
  @Input() especie:string = "Especie";
  @Input() descripcion:string = "Descripción";
  @Input() misrc:string = "Imagen";
  @Input() mialt:string = "Imagen de un perro";
  @Input() megusta:string = "0";
  @Input() fotoPerfil:string = "https://material.angular.io/assets/img/examples/shiba1.jpg";
  @Input() bonito:boolean = false;

  colorFon = "green";
  tam = 14;

  constructor(private renderer: Renderer2, private el:ElementRef) { }

  @ViewChild('miniatura',{static: false}) miniatura!:ElementRef;

  ngAfterViewInit() {
    this.renderer.setStyle(this.miniatura.nativeElement, 'background-image', `url(${this.fotoPerfil})`);
  }
  
  gusta:boolean = false;

  click(){
    this.gusta = !this.gusta;
    if(this.gusta){
      let mg = parseInt(this.megusta);
      mg++;
      this.megusta = mg.toString();
    }
    else{
      let mg = parseInt(this.megusta);
      mg--;
      this.megusta = mg.toString();
    }
  }
}
