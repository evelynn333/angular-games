import { Injectable } from '@angular/core';
import { map, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from './game';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gamesUrl = 'http://localhost:3000/games';
  private usersUrl = 'http://localhost:3000/users';
  public favourites$ : Observable <any> = new Observable();
  private favouriteSubject: BehaviorSubject<any>

  constructor(private http: HttpClient) {
    this.favouriteSubject = new BehaviorSubject<any>( this.listenFavourites());
    this.favourites$ = this.favouriteSubject.asObservable() as any;
   }
   cookie:any = localStorage.getItem('usuario');
   cookieParseada = JSON.parse(this.cookie);

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }
  getGame(id: number): Observable<Game> {
    const url = `${this.gamesUrl}/${id}`;
    return this.http.get<Game>(url);
  }
  deleteGame(id: number): Observable<Game> {
    const url = `${this.gamesUrl}/${id}`;
    return this.http.delete<Game>(url);
  }
  addFavoritos(idUser: number, game: any): Observable<any>{
    const body = { idUser, game};
    return this.http.post("http://localhost:3000/favs", body)
  }
  listenFavourites(): Observable <any>{
    return new Observable (observer =>  {this.http.get("http://localhost:3000/favs").pipe(
      map((data: any[]) => data.filter(d => d.idUser === this.cookieParseada?.id))
   ).subscribe(data =>{ return observer.next(data) } )
  })
   }
}
