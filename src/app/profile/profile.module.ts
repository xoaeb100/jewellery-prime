import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '../ui/ui.module';
import { RadioButtonModule } from 'primeng/radiobutton';

const routes: Routes = [{ path: '', component: EditProfileComponent }];

@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    CommonModule,
    UiModule,
    RadioButtonModule,
    [RouterModule.forChild(routes)],
  ],
})
export class ProfileModule {}
