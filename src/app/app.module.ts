import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavComponent } from './fav/fav.component';
import { WeatherComponent } from './weather/weather.component';
import { AccuweatherIconPipe } from './accuweather-icon.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FavComponent,
    WeatherComponent,
    AccuweatherIconPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
