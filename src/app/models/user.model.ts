export interface User {
  _id?: any;
  firstName: string;
  lastName: string;
  gender: string;
  userType?: USER_TYPE;
  email?: string;
  mobileNo?: string;
  password?: string;
  shopId?: string;
  shopUniqueId?: string;
  aadhaarNo?: string;
  panNo?: string;

  regId: string;
  instUniqueNo?: number;
  rollNo: string;
  dob: Date;
  div?: string;
  std?: string;
  board?: string;
  checked?: boolean;

  line1?: string;
  line2?: string;
  landmark?: string;
  zip?: string;
  country?: string;
  state?: string;
  city?: string;
  locality?: string;
  regionCode?: REGION_CODE;

  fatherFirstName?: string;
  fatherLastName?: string;
  fatherEmail?: string;
  fatherMobile?: string;
  motherFirstName?: string;
  motherLastName?: string;
  motherEmail?: string;
  motherMobile?: string;
  guardianFirstName?: string;
  guardianLastName?: string;
  guardianEmail?: string;
  guardianMobile?: string;
  totalAmount?: number;
  balance?: number;
}

export enum USER_TYPE {
  'vendor' = 'vendor',
  'customer' = 'customer',
  'superAdmin' = 'superAdmin',
}

export enum REGION_CODE {
  'NORTH' = 'NORTH',
  'SOUTH' = 'SOUTH',
  'EAST' = 'EAST',
  'WEST' = 'WEST',
}
