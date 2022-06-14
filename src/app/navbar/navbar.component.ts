import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  BehaviorSubject,
  debounceTime,
  Observable,
  Subject,
  Subscription,
} from 'rxjs';
import { GameService } from '../game.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  cookie: any = localStorage.getItem('usuario');
  cookieParseada = JSON.parse(this.cookie);
  hasFavourites$ = new Observable<any>();
  hasFavs = false
  constructor(
    private gameService: GameService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => this.searchEmitter.emit(value));
    this.gameService.listenFavourites();
    console.log(this.cookieParseada?.id);
    this.gameService.favourites$.subscribe((data) => {
      debugger;
      this.hasFavs = data
    });
  }
  search = new FormControl('');
  @Output('search') searchEmitter = new EventEmitter<string>();

  logout() {
    localStorage.removeItem('usuario');
    window.location.reload();
  }
}
