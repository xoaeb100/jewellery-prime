import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';


import { UiModule } from '../ui/ui.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ListCustomersComponent }
,
{ path: 'add', component: AddCustomersComponent }
];



@NgModule({
  declarations: [
    ListCustomersComponent,
    AddCustomersComponent
  ],
  imports: [
    CommonModule, UiModule, [RouterModule.forChild(routes)]
  ]
})
export class CustomersModule { }
