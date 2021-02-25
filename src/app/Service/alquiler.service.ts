import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alquiler } from '../domain/Alquiler';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  public url : string;

  constructor(public httpClient : HttpClient) { 

    this.url = environment.apiUrl + 'api/Alquiler/'; 
  }
  public getAll(): Observable<any>{

    return this.httpClient.get(this.url);
  }

  public getById(id: number): Observable<any>{

    return this.httpClient.get(this.url + id);
  }

  public save(alquilers : Alquiler): Observable<any>
  {

    return this.httpClient.post(this.url, alquilers);
  }

  public edit(alquilers : Alquiler): Observable<any>
  {
    return this.httpClient.put(this.url  + alquilers.alquilerID, alquilers);
  }
}
