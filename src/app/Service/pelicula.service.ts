import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {Observable } from    'rxjs';
import { tipoPelicula } from '../domain/tipoPelicula';
import { environment } from 'src/environments/environment';
import { peliculas } from '../domain/peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  public url : string;

  constructor(public httpClient : HttpClient) { 
    this.url = environment.apiUrl + 'api/Peliculas/';
  }

  public getAll(): Observable<any>{

    return this.httpClient.get(this.url);
  }

  public getById(id: number): Observable<any>{

    return this.httpClient.get(this.url + id);
  }

  public save(pelicula : peliculas): Observable<any>
  {

    return this.httpClient.post(this.url, pelicula);
  }

  public edit(pelicula : peliculas): Observable<any>
  {
    return this.httpClient.put(this.url  + pelicula.tipopeliculaID, pelicula);
  }

}
