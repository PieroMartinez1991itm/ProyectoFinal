import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url : string;
  

  constructor(private http:HttpClient) {
  
    this.url = 'http://localhost:8080/usuarios';
  }

  getUsuario()
  {
    return this.http.get<Usuario[]>(this.url);
  }

  getUsuarioUnico(id:number)
  {
    return this.http.get<Usuario>(this.url+"/"+id);
  }

  createUsuario(usuario:Usuario)
  {
    return this.http.post<Usuario>(this.url,usuario);
  }
  
  uppDateUsuario(usuario:Usuario)
  {
      return this.http.put<Usuario>(this.url +"/" + usuario.idusuario,usuario);
  }

  deleteUsuario(usuario:Usuario)
  {
    return this.http.delete<Usuario>(this.url+"/"+usuario.idusuario);
  }
}