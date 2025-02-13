import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  standalone: true,
  imports: [],
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.css'
})
export class CronometroComponent {
  segundo = 0;

  @Input() inicio: number = 0;
  @Output() multiplo10 = new EventEmitter<number>();

  ngOnInit(){
    this.segundo = this.inicio;
    setInterval(()=>{
      this.segundo++;
      if(this.segundo%10 == 0){
        this.multiplo10.emit(this.segundo);
      }
    },1000)
  }
}
