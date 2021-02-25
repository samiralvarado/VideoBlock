import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tipoPelicula } from 'src/app/domain/tipoPelicula';
import { TipopeliculaService } from 'src/app/service/tipopelicula.service';

@Component({
  selector: 'app-tipopelicula-edit',
  templateUrl: './tipopelicula-edit.component.html',
  styleUrls: ['./tipopelicula-edit.component.css']
})
export class TipopeliculaEditComponent implements OnInit {

  public id: number;
  public tiposPelicula: tipoPelicula;

  public showMsg : boolean = false;
  public msg : string;
  public type: string;

  constructor(public tipospeliculaService: TipopeliculaService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById(); 
  }

  public getById(){

    let param = this.activatedRoute.params['_value']
    this.id = param.id;

    this.tipospeliculaService.getById(this.id).subscribe(data => {
      this.tiposPelicula = data;
    });
  }

public edit(){
  
    console.log(this.tiposPelicula);
  this.tipospeliculaService.edit(this.tiposPelicula).subscribe(data => {
    this.router.navigate(['/tipopelicula-lista']);
  }, error => {
    console.log(error);
    this.showMsg = true;
    this.msg = 'An error has ocurred in the procedure';
    this.type = 'danger';
  }
  );
}

}
