import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Usuario/listar/listar.component';
import { DarDeAltaComponent } from './Usuario/dar-de-alta/dar-de-alta.component';
import { EditarComponent } from './Usuario/editar/editar.component';
import { BuscarComponent } from './Comprador/buscar/buscar.component';
import { AltaComponent } from './Comprador/alta/alta.component';
import { BuscarTipoComponent } from './Mascotas/buscar-tipo/buscar-tipo.component';
import{ AltaAnimalComponent } from './Mascotas/alta-animal/alta-animal.component';


const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'dar-de-alta', component:DarDeAltaComponent},
  {path:'editar', component:EditarComponent},
  {path:'buscar-tipo', component:BuscarTipoComponent},
  {path:'alta-animal', component:AltaAnimalComponent},
  {path:'alta', component:AltaComponent},
  {path:'buscar', component:BuscarComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
