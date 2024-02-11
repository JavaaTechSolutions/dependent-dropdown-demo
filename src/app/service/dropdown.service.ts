import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  private BASE_URL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public getCountries(): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'getCountry');
  }

  public getStates(countryId: number): Observable<any> {
    return this.http.get<any>(
      this.BASE_URL + 'getStateByCountryId?country_id=' + countryId
    );
  }

  public getCities(stateId: number): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'getCityByStateId?state_id=' + stateId);
  }

}
