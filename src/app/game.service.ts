import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Game } from './game';
import data from '../../details.json';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}
  private gamesUrl = 'http://localhost:3000/games';

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }
  getGame(id: number): Observable<Game> {
    const url = `${this.gamesUrl}/${id}`;
    return this.http.get<Game>(url);
  }
}
