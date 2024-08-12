import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ExchangeRatesService } from '../../services/exchange-rates.service';
import { NgIf, NgFor } from '@angular/common';
import { RatesService } from '../../services/rates.service';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [RouterModule, FormsModule, NgIf, NgFor],
  providers: [],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css',
})
export class ConverterComponent implements OnInit {
  amount = 1;
  from = 'UAH';
  to = 'USD';
  rates!: { [key: string]: number };
  toggled: boolean = false;

  convert(): number {
    if (this.toggled) {
      return this.amount * (1 / this.rates[this.from]);
    } else return this.amount * this.rates[this.to];
  }

  loadRates() {
    this.toggled = false;
    this.service
      .getRates(this.from)
      .subscribe((res) => (this.rates = res.conversion_rates));
    this.ratesService.setRates(this.rates);
  }

  toggleCurrencies(): void {
    [this.from, this.to] = [this.to, this.from];
    this.toggled = !this.toggled;
  }

  getAllCurrencies(): string[] {
    return Object.keys(this.rates);
  }

  constructor(
    private service: ExchangeRatesService,
    private ratesService: RatesService
  ) {}

  ngOnInit(): void {
    this.loadRates();
  }
}
