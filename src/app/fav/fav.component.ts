import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../Services/weather.service';
import {Subject} from 'rxjs';
import {filter, map, takeUntil} from 'rxjs/operators';
import {ApiService} from '../../Services/api.service';


@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit {

  constructor(protected weatherService: WeatherService) {
  }

  ngUnSubscribe: Subject<void> = new Subject<void>();

  favArr = [];

  ngOnInit() {
    this.weatherService.stateChanged
      .pipe(
        takeUntil(this.ngUnSubscribe),
        filter(state => state !== null)
      )
      .subscribe(state => {
        Object.keys(state).map((key) => {
          this.favArr.push(state[key]);
        });
      });
  }

}
