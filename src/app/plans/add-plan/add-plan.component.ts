import { Component } from '@angular/core';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.scss'],
})
export class AddPlanComponent {
  constructor() {
    this.duration = [
      { name: '1', code: '1' },
      { name: '2', code: '2' },

      { name: '3', code: '3' },
      { name: '4', code: '4' },
      { name: '5', code: '5' },
      { name: '6', code: '6' },
      { name: '7', code: '7' },
      { name: '8', code: '8' },
      { name: '9', code: '9' },
      { name: '10', code: '10' },
      { name: '11', code: '11' },
      { name: '12', code: '12' },
    ];

    this.type = [
      {
        name: 'monthly',
        code: 'monthly',
      },
      {
        name: 'quaterly',
        code: 'quaterly',
      },
      {
        name: '6-month',
        code: '6-month',
      },
    ];
  }

  installmentAmt!: string;
  name!: string;
  maturityAmt!: string;
  type!: any[];
  duration!: any[];
}
