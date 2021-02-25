import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { actor } from 'src/app/domain/actor';
import { peliculas } from 'src/app/domain/peliculas';
import { tipoPelicula } from 'src/app/domain/tipoPelicula';
import { PeliculaService } from 'src/app/service/pelicula.service';


@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.css']
})
export class PeliculasListComponent implements OnInit {

  public pelicula : peliculas[];
  public subPeliculas: Subscription;

  constructor(public PeliculaService : PeliculaService) { }


  ngOnDestroy(): void {
    this.subPeliculas.unsubscribe();
    
}
  ngOnInit(): void {
    this.getAll();

  }


  getAll(){
   
    this.subPeliculas = this.PeliculaService.getAll().subscribe(data =>{

    this.pelicula = data ;
  

    });
    
    
  }
  }
