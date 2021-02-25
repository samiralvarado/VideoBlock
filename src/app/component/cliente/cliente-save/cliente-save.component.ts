import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cliente } from 'src/app/domain/cliente';
import { ClienteService } from 'src/app/Service/cliente.service';

@Component({
  selector: 'app-cliente-save',
  templateUrl: './cliente-save.component.html',
  styleUrls: ['./cliente-save.component.css']
})
export class ClienteSaveComponent implements OnInit {

  public clientes: cliente;
  public showMsg : boolean = false;
  public msg : string;
  public type: string; 
  constructor(public clienteService: ClienteService, 
    private router: Router) { }

  ngOnInit(): void {
    this.clientes = new cliente(0,'','',0);
  }
  public save(): void{
    console.log(this.clientes);
  this.clienteService.save(this.clientes).subscribe(data => {
    this.router.navigate(['/cliente-list']);
  }, error => {
    console.log(error);
    this.showMsg = true;
    this.msg = 'An error has ocurred in the procedure';
    this.type = 'danger';
  }
  );
  }

}
