import { organization } from '@prisma/client';

export type Organization = organization;

export interface DonationsByMonth {
  month_start_date: string;
  amount_donated: number;
}
[];

export interface TopDonators {
  contributor: string;
  total_amount: number;
}
[];