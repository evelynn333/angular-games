import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { SetGameComponent } from './set-game/set-game.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"registro", component:RegistroComponent},
  { path: 'game/:id', component: GameDetailComponent },
  {path:"set-game", component: SetGameComponent},
  {path:"favoritos", component: FavoritosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
