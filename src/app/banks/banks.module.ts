import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBankComponent } from './list-bank/list-bank.component';
import { RouterModule, Routes } from '@angular/router';

import { UiModule } from '../ui/ui.module';

const routes: Routes = [{ path: '', component: ListBankComponent }];

@NgModule({
  declarations: [ListBankComponent],
  imports: [CommonModule, UiModule, [RouterModule.forChild(routes)]],
})
export class BanksModule {}
