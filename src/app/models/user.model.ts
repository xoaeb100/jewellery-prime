export interface User {
  _id?: any;
  firstName: string;
  lastName: string;
  email?: string;
  password?: string;
  gender: string;
  userType?: USER_TYPE;
  mobileNo?: string;
  shopId?: string;
  shopUniqueId?: string;
  aadhaarNo?: string;
  panNo?: string;
  dob?: string;
  regId?: string;

  line1?: string;
  line2?: string;
  landmark?: string;
  pin?: string;
  country?: string;
  state?: string;
  city?: string;
  locality?: string;
  regionCode?: REGION_CODE;

  aadhaarImg?: string;
  PAN?: string;
  voterId?: string;

  isDeleted?: boolean;
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
