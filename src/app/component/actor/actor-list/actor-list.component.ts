import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { actor } from 'src/app/domain/actor';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit,OnDestroy {

  
  public actors : actor[];
  public subActor: Subscription;

  constructor(public ActorService : ActorService) { }

  ngOnDestroy(): void {
    this.subActor.unsubscribe();
}
  ngOnInit(): void {
    this.getAll();

  }


  getAll(){
   
    this.subActor = this.ActorService.getAll().subscribe(data =>{

    this.actors = data;

    });
  }

}
