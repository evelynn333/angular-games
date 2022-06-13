import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from './game';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gamesUrl = 'http://localhost:3000/games';
  private usersUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {
   }

   
  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }
  getGame(id: number): Observable<Game> {
    const url = `${this.gamesUrl}/${id}`;
    return this.http.get<Game>(url);
  }


}
