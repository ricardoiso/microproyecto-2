import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/game';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-see-details',
  templateUrl: './see-details.component.html',
  styleUrls: ['./see-details.component.sass']
})
export class SeeDetailsComponent implements OnInit {

  game: Game;
  id: number;

  constructor(private gameService: GameService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.route.params.subscribe((param: Params) =>{

    this.id = param['id'];
    });

    this.gameService.getGameDetails(this.id).subscribe((info: Game) => {
      this.game = info;
      console.log(this.game)
    })
  }

}
