import { NgStyle, } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-mod-texto-dinamico',
  standalone: true,
  imports: [NgStyle,FormsModule],
  templateUrl: './mod-texto-dinamico.component.html',
  styleUrl: './mod-texto-dinamico.component.css'
})
export class ModTextoDinamicoComponent {
  @Input() tam:string = "12px";


}
