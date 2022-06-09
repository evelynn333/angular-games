import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPipe } from './pipes/search.pipe';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { SetGameComponent } from './set-game/set-game.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GameDetailComponent,
    HomepageComponent,
    BannerComponent,
    NavbarComponent,
    SearchPipe,
    LoginComponent,
    RegistroComponent,
    SetGameComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
