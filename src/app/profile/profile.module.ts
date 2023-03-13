import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '../ui/ui.module';

const routes: Routes = [{ path: '', component: EditProfileComponent }];

@NgModule({
  declarations: [EditProfileComponent],
  imports: [CommonModule, UiModule, [RouterModule.forChild(routes)]],
})
export class ProfileModule {}
