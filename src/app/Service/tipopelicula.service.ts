import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {Observable } from    'rxjs';
import { tipoPelicula } from '../domain/tipoPelicula';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipopeliculaService {
   
  public url : string;
  
  constructor(public httpClient : HttpClient) {
    
      // this.url = 'https://localhost:44310/api/Courses/';

    this.url = environment.apiUrl + 'api/TipoPelicula/'; 
   }

   public getAll(): Observable<any>{

    return this.httpClient.get(this.url);
  }

  public getById(id: number): Observable<any>{

    return this.httpClient.get(this.url + id);
  }

  public save(tipoSPelicula : tipoPelicula): Observable<any>
  {

    return this.httpClient.post(this.url, tipoSPelicula);
  }

  public edit(tipoSPelicula : tipoPelicula): Observable<any>
  {
    return this.httpClient.put(this.url  + tipoSPelicula.tipopeliculaID, tipoSPelicula);
  }
}
