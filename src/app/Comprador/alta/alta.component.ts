import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Comprador } from 'src/app/Modelo/comprador';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  comprador : Comprador = {dni:'',nombre:'',apellido:'',direccion:'',localidad:'',correo:''};


  constructor(private router:Router , private service:UsuarioService,private model:FormBuilder) {
  }

 ngOnInit() {
 }

 Guardar()
 {
   
   this.service.createUsuario(this.comprador).subscribe(data=>{
   this.router.navigate(["buscar"]); })
 
 }
   
}