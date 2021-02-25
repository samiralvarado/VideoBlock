import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { cliente } from 'src/app/domain/cliente';
import { ClienteService } from 'src/app/Service/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit,OnDestroy {

  
  public clientes : cliente[];
  public subClientes: Subscription;

  constructor(public clienteService: ClienteService) { }

  ngOnDestroy(): void {
    this.subClientes.unsubscribe();
}

ngOnInit(): void {
  this.getAll();
}

getAll(){
 
  this.subClientes = this.clienteService.getAll().subscribe(data =>{

  this.clientes = data;

  });
}
}
