import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { ProductService } from './demo/service/product.service';
import { FormsModule } from '@angular/forms';
import { UiModule } from './ui/ui.module';
import { PlansModule } from './plans/plans.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    UiModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    AppLayoutModule,
    PlansModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CountryService,
    CustomerService,
    EventService,
    IconService,
    NodeService,
    PhotoService,
    ProductService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
