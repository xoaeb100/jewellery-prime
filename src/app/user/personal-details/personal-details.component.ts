import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {
  gender: any[] = ['Male', 'Female'];
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

  items!: MenuItem[];

  activeIndex: number = 1;

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
