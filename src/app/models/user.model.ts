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
  

  line1?: string;
  line2?: string;
  landmark?: string;
  pin?: string;
  country?: string;
  state?: string;
  city?: string;
  locality?: string;
  regionCode?: REGION_CODE;


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
