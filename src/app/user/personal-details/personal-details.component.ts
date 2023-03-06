import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent {
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
}
