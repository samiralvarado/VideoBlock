import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tipoPelicula } from 'src/app/domain/tipoPelicula';
import { TipopeliculaService } from 'src/app/service/tipopelicula.service';

@Component({
  selector: 'app-tipopelicula-save',
  templateUrl: './tipopelicula-save.component.html',
  styleUrls: ['./tipopelicula-save.component.css']
})
export class TipopeliculaSaveComponent implements OnInit {

  public tipoPeliculas : tipoPelicula;
  public showMsg : boolean = false;
  public msg : string;
  public type: string;

  constructor(public tipopeliculaService: TipopeliculaService, 
    private router: Router) { }

    ngOnInit(): void {
      this.tipoPeliculas = new tipoPelicula(0,'','');
    }
    public save(): void{
      console.log(this.tipoPeliculas);
    this.tipopeliculaService.save(this.tipoPeliculas).subscribe(data => {
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
