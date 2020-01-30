import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MascotaService } from 'src/app/Servicios/mascota.service';
import { FormBuilder } from '@angular/forms';
import { Mascota } from 'src/app/Modelo/mascota';

@Component({
  selector: 'app-alta-animal',
  templateUrl: './alta-animal.component.html',
  styleUrls: ['./alta-animal.component.css']
})
export class AltaAnimalComponent implements OnInit {

  mascota:Mascota={idmascota:null , nombre:'', tipo:'',precio:null ,descripcion:'',adoptado:0 ,fechaentrada:(28/10/2019),fechaacogida:(30/10/2019)};
  


  constructor(private router:Router , private service:MascotaService,private model:FormBuilder) {
   }

  ngOnInit() {
  }

  Guardar()
  {
    
    this.service.createMascota(this.mascota).subscribe(data=>{
    this.router.navigate(["modoficar"]);})
    console.log("llega");
  }

  }