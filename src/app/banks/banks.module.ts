import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBankComponent } from './list-bank/list-bank.component';
import { RouterModule, Routes } from '@angular/router';

import { UiModule } from '../ui/ui.module';
import { AddBankComponent } from './add-bank/add-bank.component';

const routes: Routes = [
  { path: '', component: ListBankComponent },
  { path: 'add', component: AddBankComponent },
];

@NgModule({
  declarations: [ListBankComponent, AddBankComponent],
  imports: [CommonModule, UiModule, [RouterModule.forChild(routes)]],
})
export class BanksModule {}
