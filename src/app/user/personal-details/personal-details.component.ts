import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {
  gender!: any[];
  selectedDrop: SelectItem = { value: '' };
  firstName!: string;
  lastName!: string;
  mobileNo!: string;
  gstNo!: string;
  panNo!: string;
  aadharNo!: string;
  dob!: string;
  email!: string;
  password!: string;
  userType!: string;
  registrationId!: string;
  shopUniqueNo!: string;

  value8: any;

  items!: MenuItem[];

  activeIndex: number = 1;
  constructor() {
    this.gender = [
      { name: 'Male', code: 'Male' },
      { name: 'Female', code: 'Female' },
    ];
  }
  ngOnInit() {
    this.items = [
      {
        label: 'Personal',
        routerLink: ['../personal'],
      },
      {
        label: 'Business',
        routerLink: ['../business'],
      },
      {
        label: 'KYC',
        routerLink: ['../kyc'],
      },
    ];
  }
}
