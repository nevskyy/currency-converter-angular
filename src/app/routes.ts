import { Routes } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';
import { AboutComponent } from './about/about.component';

const routeConfig: Routes = [
  {
    path: '',
    component: ConverterComponent,
    title: 'Currency Converter',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
];

export default routeConfig;
