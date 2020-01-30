import { Component } from '@angular/core';
import { ListarComponent } from './Usuario/listar/listar.component';
import { Router } from '@angular/router';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoFinal';

  constructor(private router:Router){}
  
  Listar()
  {
    this.router.navigate(["listar"]);
  }

  Nuevo()
  {
    this.router.navigate(["dar-de-alta"]);
  }

  anadir()
  {
    this.router.navigate(["alta-animal"]);
  }

  Buscar()
  {
    this.router.navigate(["buscar"])
  }

  alta()
  {
    this.router.navigate(["alta"]);
  }
}
