/**
 * NASA EPIC APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema } from '../schema';

export interface SunJ2000Position {
  x: number;
  y: number;
  z: number;
}

export const sunJ2000PositionSchema: Schema<SunJ2000Position> = object({
  x: ['x', number()],
  y: ['y', number()],
  z: ['z', number()],
});
