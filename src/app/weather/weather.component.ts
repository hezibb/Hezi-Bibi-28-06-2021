import {Component, OnDestroy, OnInit} from '@angular/core';
import { ApiService } from 'src/Services/api.service';
import {ADD_FAV, DEFAULT_LAT, DEFAULT_LNG, REMOVE_FAV} from '../constants';
import {Subject} from 'rxjs';
import {debounceTime, filter, switchMap, takeUntil} from 'rxjs/operators';
import {WeatherService} from '../../Services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {
  autoCompleteInput = new Subject();
  autoCompleteValue;
  autoCompletedSuggestions: any[];
  cityName: string;
  headLine: string;
  forecasts: any[];
  favState;
  selectedKey: any;

  constructor(protected appService: ApiService, protected weatherService: WeatherService) {
  }

  ngUnSubscribe: Subject<void> = new Subject<void>();

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords;
        this.appService.getGeoPosition(latitude, longitude).subscribe((data: any) => {
          this.handleInitPosition(data);
        });
      });
    } else {
      this.appService.getGeoPosition(DEFAULT_LAT, DEFAULT_LNG).subscribe((data: any) => {
        this.handleInitPosition(data);
      });
    }


    this.autoCompleteInput
      .pipe(
        filter((data: string) => data.length > 0),
        takeUntil(this.ngUnSubscribe),
        debounceTime(300),
        switchMap((data: string) => {
          return this.appService.getAutoComplete(data);
        })
      )
      .subscribe((suggestions: any[]) => {
        this.autoCompletedSuggestions = suggestions;
      });
  }


  private getFavState(Key: string) {
    const storeState = this.weatherService.get();
    return storeState[Key] ? REMOVE_FAV : ADD_FAV;
  }

  selectSuggestion(suggestion: any) {
    this.favState          = this.getFavState(suggestion.Key);
    this.cityName          = `${suggestion.LocalizedName},${suggestion.Country.LocalizedName}`;
    this.autoCompleteValue = this.cityName;
    this.getFiveDays(suggestion.Key);
    this.autoCompletedSuggestions = null;
  }


  private handleInitPosition(geoPositionRes: any) {
    this.favState    = this.getFavState(geoPositionRes.Key);
    this.cityName    = `${geoPositionRes.EnglishName},${geoPositionRes.Country.EnglishName}`;
    this.getFiveDays(geoPositionRes.Key);
  }


  ngOnDestroy(): void {
    this.ngUnSubscribe.next();
    this.ngUnSubscribe.complete();
  }


  getFiveDays(key) {
    this.selectedKey = key;
    this.appService.get5DaysOfForecasts(key).subscribe((fiveDaysForecastData: any) => {
      this.headLine  = fiveDaysForecastData.Headline.Text;
      this.forecasts = fiveDaysForecastData.DailyForecasts;
    });
  }


  toggleFavorites() {
    const faveState = this.getFavState(this.selectedKey);
    const selectedCity = {
      key: this.selectedKey,
      cityName: this.cityName
    };
    if (faveState === ADD_FAV) {
      this.weatherService.add(selectedCity);
    } else {
      this.weatherService.remove(selectedCity);
    }

    this.favState = faveState === ADD_FAV ? REMOVE_FAV : ADD_FAV;


  }
}
