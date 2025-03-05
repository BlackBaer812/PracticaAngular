import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../interface/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private urlApi = "https://www.ejerciciostutorialesya.com/cursojs/recuperarpaises.php";

  constructor(private http:HttpClient) { }

  retornar(){
    return this.http.get<Pais[]>(this.urlApi);
  }
}
