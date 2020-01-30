import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelo/usuario';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios:Usuario[];
  
  constructor(private http:UsuarioService,private router:Router) { }

  //listamos directamente desde OnInit
  ngOnInit() {
    this.http.getUsuario().subscribe(datos=>{this.usuarios=datos;})
  }

  Editar(usuario:Usuario):void
  {
    localStorage.setItem("idusuario",usuario.idusuario.toString());
    this.router.navigate(["editar"]);
  }

  Eliminar(usuario:Usuario)
  {
    this.http.deleteUsuario(usuario).subscribe(datos=>{this.usuarios = this.usuarios.filter(u=>u!=usuario);
    alert("eliminado");
    this.router.navigate(["listar"]);
    })
  }

  getUsuarios()
  {
    return this.usuarios;
  }

}
