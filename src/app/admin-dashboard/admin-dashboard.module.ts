import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '../ui/ui.module';

const routes: Routes = [

  { path: 'add', component: DashboardComponent },
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  
    imports: [CommonModule, UiModule, [RouterModule.forChild(routes)]],
  
})
export class AdminDashboardModule { }
