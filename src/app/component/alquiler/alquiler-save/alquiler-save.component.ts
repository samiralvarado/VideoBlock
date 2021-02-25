import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alquiler } from 'src/app/domain/Alquiler';
import { AlquilerService } from 'src/app/Service/alquiler.service';

@Component({
  selector: 'app-alquiler-save',
  templateUrl: './alquiler-save.component.html',
  styleUrls: ['./alquiler-save.component.css']
})
export class AlquilerSaveComponent implements OnInit {

  public alquilers: Alquiler;
  public showMsg : boolean = false;
  public msg : string;
  public type: string; 

  constructor(public alquilerService: AlquilerService, 
    private router: Router) { }

  ngOnInit(): void {
    this.alquilers = new Alquiler(0,0,'','',0,0);
  }
  public save(): void{
    console.log(this.alquilers);
  this.alquilerService.save(this.alquilers).subscribe(data => {
    this.router.navigate(['/alquiler-list']);
  }, error => {
    console.log(error);
    this.showMsg = true;
    this.msg = 'An error has ocurred in the procedure';
    this.type = 'danger';
  }
  );
  }
}
