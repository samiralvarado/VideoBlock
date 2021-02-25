import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { actor } from 'src/app/domain/actor';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-save',
  templateUrl: './actor-save.component.html',
  styleUrls: ['./actor-save.component.css']
})
export class ActorSaveComponent implements OnInit {

  public actors: actor;
  public showMsg : boolean = false;
  public msg : string;
  public type: string;
  constructor(public actorService: ActorService, 
    private router: Router) { }

  ngOnInit(): void {
    this.actors = new actor(0,'','19990101');
  }
  public save(): void{
    console.log(this.actors);
  this.actorService.save(this.actors).subscribe(data => {
    this.router.navigate(['/actor-lista']);
  }, error => {
    console.log(error);
    this.showMsg = true;
    this.msg = 'An error has ocurred in the procedure';
    this.type = 'danger';
  }
  );
  }
}
