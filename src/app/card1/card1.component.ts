import { ChangeDetectionStrategy,Component, input, Input, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card1',
  standalone:true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './card1.component.html',
  styleUrl: './card1.component.css'
})
export class Card1Component {
  @Input() nombre:string = "Nombre";
  @Input() especie:string = "Especie";
  @Input() descripcion:string = "Descripción";
  @Input() misrc:string = "Imagen";
  @Input() mialt:string = "Imagen de un perro";
  @Input() megusta:string = "0";
  
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
