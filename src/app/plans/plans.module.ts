import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddPlanComponent } from './add-plan/add-plan.component';

const routes: Routes = [{ path: '', component: AddPlanComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, [RouterModule.forChild(routes)]],
})
export class PlansModule {}
