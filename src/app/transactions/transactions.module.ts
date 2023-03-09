import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

import { RouterModule, Routes } from '@angular/router';

import { UiModule } from '../ui/ui.module';

const routes: Routes = [{ path: '', component: ListComponent }];
@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, UiModule, [RouterModule.forChild(routes)]],
})
export class TransactionsModule {}
