import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ConverterComponent } from '../converter/converter.component';
import { RatesService } from '../../services/rates.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    AboutComponent,
    ConverterComponent,
    AboutComponent,
    NgIf,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit{
  rates!: { [key: string]: number };

  constructor(private ratesService: RatesService) {
  }

  ngOnInit(): void {
    this.ratesService.rates$.subscribe((rates) => {
      if (rates && Object.keys(rates).length > 0) this.rates = rates;
    });
  }
}
