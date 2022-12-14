/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

/** The default footer that you would like included on every email. */
export interface Footer {
  /** Indicates if this setting is enabled. */
  enable?: boolean;
  /** The plain text content of your footer. */
  text?: string;
  /** The HTML content of your footer. */
  html?: string;
}

export const footerSchema: Schema<Footer> = object({
  enable: ['enable', optional(boolean())],
  text: ['text', optional(string())],
  html: ['html', optional(string())],
});
