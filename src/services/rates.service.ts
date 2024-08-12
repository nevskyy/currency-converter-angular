import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RatesService {
  private ratesSubject = new BehaviorSubject<{ [key: string]: number }>({});
  rates$ = this.ratesSubject.asObservable();

  setRates(rates: { [key: string]: number }): void {
    this.ratesSubject.next(rates);
  }

  constructor() {}
}
