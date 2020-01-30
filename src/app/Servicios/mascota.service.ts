import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota } from '../Modelo/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http:HttpClient) {}
  
  url = 'http://localhost:8080/mascota';
 
  //listar por tipo
  getMascotaTipo(dni:string)
  {
    return this.http.get<Mascota>(this.url+"/"+dni);
  }

  createMascota(mascota:Mascota)
  {
    console.log("llega22");
    return this.http.post<Mascota>(this.url,mascota);
  }
  
  uppDateUsuario(mascota:Mascota)
  {
      return this.http.put<Mascota>(this.url +"/" + mascota.idmascota,mascota);
  }

 
}