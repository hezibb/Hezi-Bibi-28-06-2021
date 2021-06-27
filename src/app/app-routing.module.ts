import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavComponent } from './fav/fav.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'fav', component: FavComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
