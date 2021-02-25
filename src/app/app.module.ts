import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipopeliculaListComponent } from './component/tipopelicula-list/tipopelicula-list.component';
import { TipopeliculaSaveComponent } from './component/tipopelicula-save/tipopelicula-save.component';
import { TipopeliculaEditComponent } from './component/tipopelicula-edit/tipopelicula-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TipopeliculaService } from './service/tipopelicula.service';
import { ActorListComponent } from './component/actor/actor-list/actor-list.component';
import { PeliculaService } from './service/pelicula.service';
import { actor } from './domain/actor';
import { ActorService } from './service/actor.service';
import { PeliculasListComponent } from './component/peliculas/peliculas-list/peliculas-list.component';
import { ClienteListComponent } from './component/cliente/cliente-list/cliente-list.component';
import { ActorSaveComponent } from './component/actor/actor-save/actor-save.component';
import { ClienteSaveComponent } from './component/cliente/cliente-save/cliente-save.component';
import { ClienteService } from './Service/cliente.service';
import { AlquilerListComponent } from './component/alquiler/alquiler-list/alquiler-list.component';
import { AlquilerSaveComponent } from './component/alquiler/alquiler-save/alquiler-save.component';
import { AlquilerService } from './Service/alquiler.service';


@NgModule({
  declarations: [
    AppComponent,
    TipopeliculaListComponent,
    TipopeliculaSaveComponent,
    TipopeliculaEditComponent,
    PeliculasListComponent,
    ActorListComponent,
    ClienteListComponent,
    ActorSaveComponent,
    ClienteSaveComponent,
    AlquilerListComponent,
    AlquilerSaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TipopeliculaService,
    PeliculaService,
    ActorService,
    ClienteService,
    AlquilerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
