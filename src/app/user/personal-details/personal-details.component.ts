import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent {
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
  registrationId!: string;
  shopUniqueNo!: string;
  value8: any;

  constructor() {
    this.gender = [
      { name: 'Male', code: 'Male' },
      { name: 'Female', code: 'Female' },
    ];
  }
}
