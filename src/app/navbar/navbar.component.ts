import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent {
  cookie = localStorage.getItem('usuario');


  ngOnInit() {
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => this.searchEmitter.emit(value));
  }
  search = new FormControl('');
  @Output('search') searchEmitter = new EventEmitter<string>();

  logout(){
    localStorage.removeItem('usuario');
    window.location.reload();
  }

}
