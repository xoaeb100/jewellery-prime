export interface Bank {
  _id?: string;
  shopId?: string;
  accountHolderName: string;
  accountType: ACCOUNT_TYPE;
  accountNo: string;
  ifsc: string;
  upi?: string;
  mid?: string;

  sid?: string;
  bankname: string;
  branch: string;
  zipCode?: string;
  state: string;
  district: string;
  city: string;
  centre: string;
  address: string;
  bankCode: string;

  contact?: string;
  imps?: boolean;
  neft?: boolean;
  rtgs?: boolean;
  merchantId?: string;
  micr?: string;
  createdOn?: Date;
  createdBy?: string;
  edit?: boolean;
  enabled?: boolean;
  isDeleted?: boolean;
}

export enum ACCOUNT_TYPE {
  'SAVING' = 'SAVING',
  'CURRENT' = 'CURRENT',
}
