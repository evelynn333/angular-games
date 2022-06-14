import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  public favoritos = [];
  constructor(private gameservice : GameService) {}

  ngOnInit(): void {
    this.getFavs();
  }

  getFavs(){
    this.gameservice.getFavs().subscribe(favoritos => this.favoritos= favoritos)
  }
}
