import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {Observable } from    'rxjs';
import { tipoPelicula } from '../domain/tipoPelicula';
import { environment } from 'src/environments/environment';
import { actor } from '../domain/actor';
@Injectable({
  providedIn: 'root'
})
export class ActorService {
  public url : string;

  constructor(public httpClient : HttpClient) { 

    this.url = environment.apiUrl + 'api/Actor/'; 
  }
  public getAll(): Observable<any>{

    return this.httpClient.get(this.url);
  }

  public getById(id: number): Observable<any>{

    return this.httpClient.get(this.url + id);
  }

  public save(actors : actor): Observable<any>
  {

    return this.httpClient.post(this.url, actors);
  }

  public edit(actors : actor): Observable<any>
  {
    return this.httpClient.put(this.url  + actors.actorID, actors);
  }
}
