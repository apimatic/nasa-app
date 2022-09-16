/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { TypeEnum, typeEnumSchema } from './typeEnum';

export interface ContactDBCustomFieldSchema {
  /** The name of the field */
  name?: string;
  /** The type of the field. */
  type?: TypeEnum;
}

export const contactDBCustomFieldSchemaSchema: Schema<ContactDBCustomFieldSchema> = object(
  {
    name: ['name', optional(string())],
    type: ['type', optional(typeEnumSchema)],
  }
);
