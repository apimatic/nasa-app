/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

/** The individual events and their stats. */
export interface StatsAdvancedStatsWithClicksAndOpens {
  /** The number of links that were clicked in your emails. */
  clicks?: number;
  /** The number of unique recipients who clicked links in your emails. */
  uniqueClicks?: number;
  /** The total number of times your emails were opened by recipients. */
  opens?: number;
  /** The number of unique recipients who opened your emails. */
  uniqueOpens?: number;
}

export const statsAdvancedStatsWithClicksAndOpensSchema: Schema<StatsAdvancedStatsWithClicksAndOpens> = object(
  {
    clicks: ['clicks', optional(number())],
    uniqueClicks: ['unique_clicks', optional(number())],
    opens: ['opens', optional(number())],
    uniqueOpens: ['unique_opens', optional(number())],
  }
);
