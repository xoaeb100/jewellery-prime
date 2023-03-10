import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  items!: MenuItem[];

  activeIndex: number = 1;

  ngOnInit() {
    this.items = [
      {
        label: 'Personal',
        routerLink: ['/sign-up/personal'],
      },
      {
        label: 'Business',
        routerLink: ['/sign-up/business'],
      },
      {
        label: 'Bank',
        routerLink: ['/sign-up/bank'],
      },
      {
        label: 'KYC',
        routerLink: ['/sign-up/kyc'],
      },
    ];
  }
}
