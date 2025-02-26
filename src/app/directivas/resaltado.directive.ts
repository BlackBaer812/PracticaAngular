import { Directive, ElementRef, Input, SimpleChange, OnChanges } from '@angular/core';

@Directive({
  selector: '[resaltado]'
})
export class ResaltadoDirective {
  @Input("resaltado") colorFondo: string = "yellow";
  @Input("tamano") tamano: number = 0;

  constructor(private element: ElementRef) { }

  ngOnInit():void{
    this.actualizar();
  }

  ngOnChanges(changes: SimpleChange) {
    this.actualizar();
  }

  actualizar() {
    if (this.colorFondo != null)
      this.element.nativeElement.style.backgroundColor = this.colorFondo;

    if (this.tamano > 0)
    {
      console.log(this.element.nativeElement);
      this.element.nativeElement.style.fontSize = this.tamano + 'px';
    }
  }
}
