import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/game'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  games: Game[];

  constructor(private game: GameService) { }

  ngOnInit() {

    this.game.getLatestGames(20).subscribe(
      info => {
        this.games = info['results']
      }
    );
    
  }

}
