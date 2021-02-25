import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { cliente } from '../domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  public url : string;

  constructor(public httpClient : HttpClient) { 

    this.url = environment.apiUrl + 'api/Cliente/'; 
  }
  public getAll(): Observable<any>{

    return this.httpClient.get(this.url);
  }

  public getById(id: number): Observable<any>{

    return this.httpClient.get(this.url + id);
  }

  public save(clientes : cliente): Observable<any>
  {

    return this.httpClient.post(this.url, clientes);
  }

  public edit(clientes : cliente): Observable<any>
  {
    return this.httpClient.put(this.url  + clientes.clienteID, clientes);
  }

}
