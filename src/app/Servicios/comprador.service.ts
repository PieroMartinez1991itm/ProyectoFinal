import { Injectable } from '@angular/core';
import { Comprador } from '../Modelo/comprador';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompradorService {

   
  constructor(private http:HttpClient) {}
  
  url = 'http://localhost:8080/comprador';
 
  
  getCompradorUnico(dni:string)
  {
    return this.http.get<Comprador>(this.url+"/"+dni);
  }

  createComprador(comprador:Comprador)
  {
    return this.http.post<Comprador>(this.url,comprador);
  }
  
  uppDateComprador(comprador:Comprador)
  {
      return this.http.put<Comprador>(this.url +"/" + comprador.dni,comprador);
  }

 
}