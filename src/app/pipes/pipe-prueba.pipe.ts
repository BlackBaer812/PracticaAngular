import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePrueba'
})
export class PipePruebaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
