import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-barra-aria',
  standalone: true,
  imports: [],
  templateUrl: './barra-aria.component.html',
  styleUrls: ['./barra-aria.component.css']
})
export class BarraAriaComponent{
  @Input() value: number = 0; // Valor actual del progreso
  @Input() max: number = 100; // Valor máximo del progreso 

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes) {
  //     this.announceChange();
  //   }
  // }

  // announceChange() {
  //   const ariaLiveElement = document.getElementById('aria-live-element');
  // }
}
