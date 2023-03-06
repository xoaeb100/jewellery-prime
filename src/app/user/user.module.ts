import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { KycDetailsComponent } from './kyc-details/kyc-details.component';
import { RouterModule, Routes } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';

const routes: Routes = [
  { path: 'personal', component: PersonalDetailsComponent },
  { path: 'kyc', component: KycDetailsComponent },
  { path: 'business', component: BusinessDetailsComponent },
];

@NgModule({
  declarations: [
    PersonalDetailsComponent,
    BusinessDetailsComponent,
    KycDetailsComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    PasswordModule,
    [RouterModule.forChild(routes)],
  ],
})
export class UserModule {}
