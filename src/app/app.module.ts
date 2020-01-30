import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Usuario/listar/listar.component';
import { DarDeAltaComponent } from './Usuario/dar-de-alta/dar-de-alta.component';
import { EditarComponent } from './Usuario/editar/editar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AltaAnimalComponent } from './Mascotas/alta-animal/alta-animal.component';
import { ModificarComponent } from './Mascotas/modificar/modificar.component';
import { BuscarComponent } from './Comprador/buscar/buscar.component';
import { BuscarTipoComponent } from './Mascotas/buscar-tipo/buscar-tipo.component';
import { AltaComponent } from './Comprador/alta/alta.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    DarDeAltaComponent,
    EditarComponent,
    AltaComponent,
    ModificarComponent,
    BuscarComponent,
    BuscarTipoComponent,
    AltaAnimalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
