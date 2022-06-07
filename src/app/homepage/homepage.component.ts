import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';
import { debounceTime } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  gamesDetails: Game[] = [];

  handleSearch(value: string) {
    this.filtroValor = value;
    console.log(value);
  }

  filtroValor = '';
  constructor(private gameservice: GameService) {}

  ngOnInit(): void {
    this.getGames();
    //busqueda con un intervalo de tiempo para dar la respuesta
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => this.searchEmitter.emit(value));
  }
  search = new FormControl('');

  @Output('search') searchEmitter = new EventEmitter<string>();
  getGames(): void {
    this.gameservice
      .getGames()
      .subscribe((gamesDetails) => (this.gamesDetails = gamesDetails));
  }
}
