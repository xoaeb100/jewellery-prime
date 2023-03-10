import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { KycDetailsComponent } from './kyc-details/kyc-details.component';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '../ui/ui.module';
import { MainComponent } from './main/main.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
const routes: Routes = [
  { path: '', component: PersonalDetailsComponent },

  { path: 'personal', component: PersonalDetailsComponent },
  { path: 'business', component: BusinessDetailsComponent },
  { path: 'bank', component: BankDetailsComponent },

  { path: 'kyc', component: KycDetailsComponent },
];

@NgModule({
  declarations: [
    PersonalDetailsComponent,
    BusinessDetailsComponent,
    KycDetailsComponent,
    MainComponent,
    BankDetailsComponent,
  ],
  imports: [UiModule, CommonModule, [RouterModule.forChild(routes)]],
})
export class UserModule {}
