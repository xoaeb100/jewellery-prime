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
  aadhaarNo!:string;
  panNo!:string;
  mobileNo!:number;
  gstNo!:string;
  regNo!:string;
  cinNo!:string;
  line1!:string;
  line2!:string;
  state!:string;
  district!:string;
  city!:string;
  pincode!:string;
}
