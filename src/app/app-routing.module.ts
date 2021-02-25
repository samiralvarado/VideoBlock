import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorSaveComponent } from './component/actor/actor-save/actor-save.component';
import { ActorListComponent } from './component/actor/actor-list/actor-list.component';
import { ClienteListComponent } from './component/cliente/cliente-list/cliente-list.component';
import { ClienteSaveComponent } from './component/cliente/cliente-save/cliente-save.component';
import { PeliculasListComponent } from './component/peliculas/peliculas-list/peliculas-list.component';
import { TipopeliculaEditComponent } from './component/tipopelicula-edit/tipopelicula-edit.component';
import { TipopeliculaListComponent } from './component/tipopelicula-list/tipopelicula-list.component';
import { TipopeliculaSaveComponent } from './component/tipopelicula-save/tipopelicula-save.component';
import { AlquilerSaveComponent } from './component/alquiler/alquiler-save/alquiler-save.component';
import { AlquilerListComponent } from './component/alquiler/alquiler-list/alquiler-list.component';

const routes: Routes = [
  { path : 'tipopelicula-lista', component: TipopeliculaListComponent },
  { path : 'peliculas-lista', component: PeliculasListComponent },  
  { path : 'tipoPelicula-edit/:id', component: TipopeliculaEditComponent },
  {path : 'tipopelicula-save', component : TipopeliculaSaveComponent},
  { path: 'actor-list', component: ActorListComponent},
  { path: 'actor-save', component: ActorSaveComponent},
  {path : 'cliente-list', component : ClienteListComponent},
  {path : 'cliente-save', component : ClienteSaveComponent},
  {path : 'alquiler-save', component : AlquilerSaveComponent},
  {path : 'alquiler-list', component : AlquilerListComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
