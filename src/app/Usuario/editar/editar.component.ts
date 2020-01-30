import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Usuario } from 'src/app/Modelo/usuario';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  usuario:Usuario={idusuario:null ,nombre:'',apellido:'',telefono:null ,username:'', contrasenia:''};

  constructor(private router:Router, private http:UsuarioService, private model:FormBuilder) { }

  ngOnInit() {
    this.Editar();
  }

  Editar()
  {
    let idusuario=localStorage.getItem("idusuario");
    this.http.getUsuarioUnico(+idusuario).subscribe(datos=>{this.usuario=datos;})
  }
  
  Actualizar(usuario:Usuario)
  {
    this.http.uppDateUsuario(usuario).subscribe(datos=>{this.usuario=datos;alert("Se actualizo correctamente");
    this.router.navigate(["listar"]);
  })
  }

  formularioEjemplo=this.model.group({
  // nombre:['', Validators.required]
  //, apellido:['', Validators.required]//,Validators.minLength(9)]
  });
  
  submit()
  {
    console.log(this.formularioEjemplo.value)
  }
  


}
