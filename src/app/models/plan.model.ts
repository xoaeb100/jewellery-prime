export interface Plan {
  _id: string;
  planName?: string;
  installmentAmt?: string;
  installmentType?: string;
  maturityAmt?: string;
  notifDate?: string;
  isDeleted?: boolean;
}
