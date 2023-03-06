import { Component } from '@angular/core';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss']
})
export class BusinessDetailsComponent {

  businessName!: string;
  businessType!: string;
  businessCategory!:string;
  addharNo!:string;
  panNo!:string;
  mobileNo!:number;
  gstNo!:string;
  regNo!:string;
  cinNo!:string;
  address!:string;
  state!:string;
  district!:string;
  city!:string;
  pincode!:string;
}
