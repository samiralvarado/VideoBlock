import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription } from 'rxjs';
import { tipoPelicula } from 'src/app/domain/tipoPelicula';
import { TipopeliculaService } from 'src/app/service/tipopelicula.service';


@Component({
  selector: 'app-tipopelicula-list',
  templateUrl: './tipopelicula-list.component.html',
  styleUrls: ['./tipopelicula-list.component.css']
})
export class TipopeliculaListComponent implements OnInit,OnDestroy {

  public tipoPeliculas : tipoPelicula[];
  public subtPeliculas: Subscription;

  constructor(public tipopeliculaService: TipopeliculaService) { }

  ngOnDestroy(): void {
      this.subtPeliculas.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
   
    this.subtPeliculas = this.tipopeliculaService.getAll().subscribe(data =>{

    this.tipoPeliculas = data;

    });

}
}
