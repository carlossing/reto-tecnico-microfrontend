import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'gnx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'gnx';

  constructor(private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
