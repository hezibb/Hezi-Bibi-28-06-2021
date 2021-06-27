import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_KEY } from 'src/app/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

   protocol:string = window.location.protocol;
  
  getRequest(url, q?) {
    const params = new HttpParams({fromObject: {apikey: API_KEY, q, metric: 'true'}});
    return this.http.get(url, {params});

  }

  getGeoPosition(lat: number, lng: number): Observable<any> {
    const url = `${this.protocol}//dataservice.accuweather.com/locations/v1/cities/geoposition/search`;
    return this.getRequest(url, `${lat},${lng}`);
  }

  getAutoComplete(key: string): Observable<any> {
    const url = `${this.protocol}//dataservice.accuweather.com/locations/v1/cities/autocomplete`;
    return this.getRequest(url, `${key}`);
  }

  get5DaysOfForecasts(key: string): Observable<any> {
    const url = `${this.protocol}//dataservice.accuweather.com/forecasts/v1/daily/5day/${key}`;
    return this.getRequest(url);
  }


  getCurrentConditions(key: string): Observable<any> {
    const url = `${this.protocol}//dataservice.accuweather.com/currentconditions/v1/${key}`;
    return this.getRequest(url);
  }

}
