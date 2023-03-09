import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { SpeedDialModule } from 'primeng/speeddial';
import { SliderModule } from 'primeng/slider';
import { FileUploadModule } from 'primeng/fileupload';

const arrays = [
  CommonModule,
  CalendarModule,
  PasswordModule,
  ToastModule,
  InputTextModule,
  DropdownModule,
  StepsModule,
  CardModule,
  SpeedDialModule,
  SliderModule,
  FileUploadModule,
];
@NgModule({
  declarations: [],
  imports: [arrays],
  exports: [arrays],
})
export class UiModule {}
