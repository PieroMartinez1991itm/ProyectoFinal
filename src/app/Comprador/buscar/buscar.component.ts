import { Component, OnInit } from '@angular/core';
import { Comprador } from 'src/app/Modelo/comprador';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  comprador : Comprador = {dni:'',nombre:'',apellido:'',direccion:'',localidad:'',correo:''};

  
  constructor(private router:Router , private service:UsuarioService,private model:FormBuilder) {
  }

 ngOnInit() {
 }

 Guardar()
 {
   
   this.service.createUsuario(this.comprador).subscribe(data=>{
   this.router.navigate(["listar"]); })
 
 }
   
}