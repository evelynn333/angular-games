import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../game';
import { GameService } from '../game.service';
import { Usuario } from '../usuario';
@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
})
export class GameDetailComponent implements OnInit {
  @Input() game?: Game;
  cookie:any = localStorage.getItem('usuario');
  cookieParseada = JSON.parse(this.cookie);
  
  constructor(
    private gameServcice: GameService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getGame();

  }
  getGame(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gameServcice.getGame(id).subscribe((game) => ( this.game =  game));
  }
  anadirFav(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gameServcice.getGame(id).subscribe((game) => ( this.game =  game));

    this.gameServcice.addFavoritos(this.cookieParseada.id, this.game)
    .subscribe(response=>{
      alert('Juego añadido a favoritos');
    },error=>{
      alert("Algo ha ido mal")
    })
   }

  }
