import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { KycDetailsComponent } from './kyc-details/kyc-details.component';
import { RouterModule, Routes } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';

import { ToastModule } from 'primeng/toast';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  { path: '', component: PersonalDetailsComponent },

  { path: 'personal', component: PersonalDetailsComponent },
  { path: 'kyc', component: KycDetailsComponent },
  { path: 'business', component: BusinessDetailsComponent },
];

@NgModule({
  declarations: [
    PersonalDetailsComponent,
    BusinessDetailsComponent,
    KycDetailsComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule,
    InputTextModule,
    StepsModule,
    ToastModule,

    [RouterModule.forChild(routes)],
  ],
})
export class UserModule {}
