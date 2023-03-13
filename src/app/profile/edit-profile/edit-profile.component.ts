import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
  firstName!: string;
  sureName!: string;
  male!: string;
  female!: string;
  email!: string;

  value8: any;

  gender: { name: string; code: string }[];
  activeIndex: number = 1;
  constructor() {
    this.gender = [
      { name: 'Male', code: 'Male' },
      { name: 'Female', code: 'Female' },
    ];
  }
}
