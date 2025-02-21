import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmergenteStrService {

  constructor() { }

  mostrarMensaje(mensaje:string){
    alert(mensaje);
  }

  victoria(nums: number[]){
    let salida:boolean = true;
    nums.forEach((index,num)=>{
      if(index!=0 && salida){
        nums[(index-1)] != num ? salida = false : console.log("continua")
      }
    })

    return salida;
  }
}
