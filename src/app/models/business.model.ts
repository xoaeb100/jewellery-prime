export interface Business {
  _id: string;
  businessName?: string;
  PAN?: string;
  CIN?: string;
  GST?: string;
  type?: string;
  category?: string;
  phone?: string;

  line1?: string;
  line2?: string;
  landmark?: string;
  pin?: string;
  country?: string;
  state?: string;
  city?: string;
  locality?: string;
  regionCode?: REGION_CODE;

  createdOn?: Date;
  createdBy?: string;
  isDeleted?: boolean;
}

export enum REGION_CODE {
  'NORTH' = 'NORTH',
  'SOUTH' = 'SOUTH',
  'EAST' = 'EAST',
  'WEST' = 'WEST',
}
