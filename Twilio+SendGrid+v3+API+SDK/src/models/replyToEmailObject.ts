/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ReplyToEmailObject {
  /** The email address where any replies or bounces will be returned. */
  email: string;
  /** A name or title associated with the `reply_to` email address. */
  name?: string;
}

export const replyToEmailObjectSchema: Schema<ReplyToEmailObject> = object({
  email: ['email', string()],
  name: ['name', optional(string())],
});
