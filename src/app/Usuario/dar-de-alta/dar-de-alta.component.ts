import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Usuario } from 'src/app/Modelo/usuario';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dar-de-alta',
  templateUrl: './dar-de-alta.component.html',
  styleUrls: ['./dar-de-alta.component.css']
})
export class DarDeAltaComponent implements OnInit {

  usuario:Usuario={idusuario:null , nombre:'', apellido:'',telefono:'' ,username:'',contrasenia:''};
  
  constructor(private router:Router , private service:UsuarioService,private model:FormBuilder) {
   }

  ngOnInit() {
  }

  Guardar()
  {
    console.log("llega");
    
    this.service.createUsuario(this.usuario).subscribe(data=>{
    this.router.navigate(["listar"]); })
  
  }
    
    
}
