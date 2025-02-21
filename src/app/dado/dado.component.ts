import { Component, Input, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent{
  valor: number = Math.floor(Math.random() * 6) + 1;
  @Input() tiempo:number = 1200;
  @ViewChild('dado',{static:true}) dado!: ElementRef;

  ngAfterViewInit() {
    document.documentElement.style.setProperty('--tiempo', this.tiempo + 'ms');
    // Este es el lugar correcto para manipular dadoRef
  }

  tirar(): Promise<number> {
    return new Promise((resolve) => {
      this.valor = Math.floor(Math.random() * 6) + 1;
  
      if (this.dado && this.dado.nativeElement) {
        this.dado.nativeElement.classList.add("rolling");
      } else {
        console.error('dado no está disponible');
      }
  
      const random = setInterval(() => {
        this.valor = Math.floor(Math.random() * 6) + 1;
      }, 100);
  
      setTimeout(() => {
        clearInterval(random);
        this.dado.nativeElement.classList.remove("rolling");
        resolve(this.valor); // En lugar de return, usamos resolve() para devolver el valor
      }, this.tiempo);
    });
  }
}
