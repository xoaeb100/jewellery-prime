import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { UiModule } from '../ui/ui.module';
import { ListPlanComponent } from './list-plan/list-plan.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ListPlanComponent },
  { path: 'add', component: AddPlanComponent },
];

@NgModule({
  declarations: [AddPlanComponent, ListPlanComponent],
  imports: [
    CommonModule,
    UiModule,
    ReactiveFormsModule,
    [RouterModule.forChild(routes)],
  ],
})
export class PlansModule {}
