import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http:HttpClient) { }

  retornarGet(){
    return this.http.get("https://ejerciciostutorialesya.com/vue/datos.php");
  }

  retornar() {
    return [
      {
        codigo: 1,
        descripcion: "peras",
        precio: 5.53
      },
      {
        codigo: 2,
        descripcion: "platanos",
        precio: 2.05
      },
      {
        codigo: 3,
        descripcion: "melon",
        precio: 12
      }
    ];
  }
}
