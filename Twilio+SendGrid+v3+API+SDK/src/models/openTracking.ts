/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

/** Allows you to track if the email was opened by including a single pixel image in the body of the content. When the pixel is loaded, Twilio SendGrid can log that the email was opened. */
export interface OpenTracking {
  /** Indicates if this setting is enabled. */
  enable?: boolean;
  /** Allows you to specify a substitution tag that you can insert in the body of your email at a location that you desire. This tag will be replaced by the open tracking pixel. */
  substitutionTag?: string;
}

export const openTrackingSchema: Schema<OpenTracking> = object({
  enable: ['enable', optional(boolean())],
  substitutionTag: ['substitution_tag', optional(string())],
});
