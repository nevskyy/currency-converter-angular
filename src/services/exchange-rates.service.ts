// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExchangeRatesResponse } from '../interfaces/exchange-rates-response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService {
  url = 'https://v6.exchangerate-api.com/v6/';
  apiKey: string = '4c0c929d356706e2eeb91747';

  constructor(private httpClient: HttpClient) {}

  getRates(base: string): Observable<ExchangeRatesResponse> {
    return this.httpClient.get<ExchangeRatesResponse>(
      `${this.url}${this.apiKey}/latest/${base}`
    );
  }
}
