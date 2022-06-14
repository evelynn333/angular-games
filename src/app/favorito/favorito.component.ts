import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent implements OnInit {

  constructor(private gameservice : GameService) {}

  ngOnInit(): void {
    this.getFavs();
  }

  getFavs(){
    this.gameservice.getFavs().subscribe(favoritos => console.log(favoritos))
  }
}
