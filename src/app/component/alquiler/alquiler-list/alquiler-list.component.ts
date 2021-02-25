import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Alquiler } from 'src/app/domain/Alquiler';
import { AlquilerService } from 'src/app/Service/alquiler.service';

@Component({
  selector: 'app-alquiler-list',
  templateUrl: './alquiler-list.component.html',
  styleUrls: ['./alquiler-list.component.css']
})
export class AlquilerListComponent implements OnInit, OnDestroy {

  public alquilers : Alquiler[];
  public subAlquiler: Subscription;

  constructor(public alquilerService : AlquilerService) { }

  ngOnDestroy(): void {
    this.subAlquiler.unsubscribe();
}
  ngOnInit(): void {
    this.getAll();

  }


  getAll(){
   
    this.subAlquiler = this.alquilerService.getAll().subscribe(data =>{

    this.alquilers = data;

    });
  }
}
