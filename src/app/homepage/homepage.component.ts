import { Component,OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
 gamesDetails: Game[] = [];
 constructor(private gameservice: GameService){}

 ngOnInit(): void {
   this.getGames();
 }
 getGames(): void {
   this.gameservice.getGames()
       .subscribe(gamesDetails => this.gamesDetails = gamesDetails);
 }
}
