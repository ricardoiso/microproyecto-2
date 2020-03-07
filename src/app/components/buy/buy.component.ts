import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Game } from 'src/app/models/game';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.sass']
})
export class BuyComponent implements OnInit {

  RegisterForm: FormGroup;
  id: number;
  game: Game;

  constructor(private firestoreService: FirestoreService, private gameService: GameService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.RegisterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      game: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      cedula: new FormControl('', Validators.required)
    });

    this.id = this.route.snapshot.params['id'];

    this.route.params.subscribe((param: Params) =>{

    this.id = param['id'];
    });

    this.gameService.getGameDetails(this.id).subscribe((info: Game) => {
      this.game = info;
      console.log(this.game)
    })
  }

  goTo(game){
    this.router.navigate(['/home', game.id]);
  }

  submit() {
    console.log(this.RegisterForm);
    const videojuego = {
      name: this.RegisterForm.value.name,
      game: this.game.name,
      correo: this.RegisterForm.value.correo,
      cedula: this.RegisterForm.value.cedula
    };

    this.firestoreService.create(videojuego,'videojuegos');
    this.goTo(this.game);
  }

}
