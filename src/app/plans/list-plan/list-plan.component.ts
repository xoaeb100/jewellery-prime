import { Component } from '@angular/core';

@Component({
  selector: 'app-list-plan',
  templateUrl: './list-plan.component.html',
  styleUrls: ['./list-plan.component.scss'],
})
export class ListPlanComponent {
  items = [
    {
      icon: 'pi pi-plus',

      routerLink: ['/plans/add'],
    },
    {
      icon: 'pi pi-pencil',
    },
    { icon: 'pi pi-refresh' },
    { icon: 'pi pi-trash' },
  ];
}
