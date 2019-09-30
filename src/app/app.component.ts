import { Component } from '@angular/core';

import { HomePage } from '../pages/home/home';
import { SegmentsPage } from '../pages/segments/segments';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor() {}
}

