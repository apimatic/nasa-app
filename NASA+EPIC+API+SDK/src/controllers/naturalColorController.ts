/**
 * NASA EPIC APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { Dates, datesSchema } from '../models/dates';
import {
  ImageQualityEnum,
  imageQualityEnumSchema,
} from '../models/imageQualityEnum';
import { ImagesOnADate, imagesOnADateSchema } from '../models/imagesOnADate';
import {
  LunarTransitDatesEnum,
  lunarTransitDatesEnumSchema,
} from '../models/lunarTransitDatesEnum';
import {
  SolarEclipseDatesEnum,
  solarEclipseDatesEnumSchema,
} from '../models/solarEclipseDatesEnum';
import { array, number, string } from '../schema';
import { BaseController } from './baseController';

export class NaturalColorController extends BaseController {
  /**
   * This endpoint returns all the dates when images are available. The first available date is 2015-06-
   * 13, while some dates are unavailable which can be checked from this endpoint.
   *
   * @return Response from the API call
   */
  async getAllAvailableDates(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Dates[]>> {
    const req = this.createRequest('GET', '/api/natural/all');
    req.baseUrl('NASA');
    return req.callAsJson(array(datesSchema), requestOptions);
  }

  /**
   * This endpoint gives the list of images available on a particular date. The following information is
   * available for every image in the collection:
   *
   * image [name]
   * date
   * caption
   * centroid_coordinates
   * dscovr_j2000_position
   * lunar_j2000_position
   * sun_j2000_position
   * attitude_quaternions
   * coords
   * {
   * lat (Latitude)
   * lon (Longitude)
   * centroid_coordinates (Geographical coordinates that the satellite is looking at)
   * dscovr_j2000_position (Position of the satellite in space)
   * lunar_j2000_position   (Position of the moon in space)
   * sun_j2000_position (Position of the sun in space)
   * attitude_quaternions   (Satellite attitude)
   * }
   *
   * @param date Example: 2015-10-31
   * @return Response from the API call
   */
  async getImageListOnADate(
    date: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ImagesOnADate[]>> {
    const req = this.createRequest('GET');
    req.baseUrl('NASA');
    const mapped = req.prepareArgs({ date: [date, string()] });
    req.appendTemplatePath`/api/natural/date/${mapped.date}`;
    return req.callAsJson(array(imagesOnADateSchema), requestOptions);
  }

  /**
   * All of the imagery is stored in an archival directory subdivided by collection, year, month, day,
   * and image type. There are three separate image types available: full resolution PNG, half-resolution
   * JPG, and thumbnails.
   *
   * @param year         Example: 2015
   * @param month        Example: 10
   * @param day          Example: 31
   * @param imageQuality There are three separate image types available: full resolution PNG, half-
   *                                         resolution JPG, and thumbnails
   * @param imageTitle   Image Title can be obtained from "Image List On A Date" endpoint. Please
   *                                         append .png (for PNG) or .jpg (for JPG and Thumbnails).
   * @return Response from the API call
   */
  async getSingleImageInPNG(
    year: string,
    month: string,
    day: string,
    imageQuality: ImageQualityEnum,
    imageTitle: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<NodeJS.ReadableStream | Blob>> {
    const req = this.createRequest('GET');
    req.baseUrl('NASA');
    const mapped = req.prepareArgs({
      year: [year, string()],
      month: [month, string()],
      day: [day, string()],
      imageQuality: [imageQuality, imageQualityEnumSchema],
      imageTitle: [imageTitle, string()],
    });
    req.appendTemplatePath`/archive/natural/${mapped.year}/${mapped.month}/${mapped.day}/${mapped.imageQuality}/${mapped.imageTitle}`;
    return req.callAsStream(requestOptions);
  }

  /**
   * This endpoint provides combined images of a single day. Please note that DSCOVR started operation in
   * 2015. Some dates are unavailable while DSCOVR went to maintenance etc. The endpoint "All Available
   * Dates" can help getting a list of all the available dates.
   *
   * @param date         All available images on this date would be displayed. Date pattern needs
   *                                         to be in yyyy-mm-dd format.
   * @param gridColumns  Number of earth positions displayed per row
   * @param imageQuality Quality of the Image being displayed. Thumbnail is of the lowest quality,
   *                                         but is the quickest to load. The Best quality images in PNG could take up
   *                                         to a minute to load
   * @return Response from the API call
   */
  async getCombinedImagesOnADate(
    date: string,
    gridColumns: number,
    imageQuality: ImageQualityEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<NodeJS.ReadableStream | Blob>> {
    const req = this.createRequest('GET');
    req.baseUrl('apimatic');
    const mapped = req.prepareArgs({
      date: [date, string()],
      gridColumns: [gridColumns, number()],
      imageQuality: [imageQuality, imageQualityEnumSchema],
    });
    req.appendTemplatePath`/imagescollage/${mapped.date}/${mapped.gridColumns}/${mapped.imageQuality}`;
    return req.callAsStream(requestOptions);
  }

  /**
   * DSCOVR stays at the Lagrange point, L1, which means it can see the sun-lit part of the Earth 24/7.
   * Therefore, in case of a solar eclipse, it captures the shadow of the moon passing through different
   * parts of our planet.
   *
   * @param date         All available images on this date would be displayed. Please note
   *                                              that DSCOVR satellite started operation in 2015. Some dates are
   *                                              unavailable while DSCOVR went to maintenance etc.
   * @param gridColumns  Number of earth positions to be displayed per row. More columns
   *                                              means a wider picture
   * @param imageQuality Quality of the Image being displayed. Thumbnail is of the lowest
   *                                              quality, but is the quickest to load. The Best quality images in PNG
   *                                              could take up to a minute to load
   * @return Response from the API call
   */
  async getSolarEclipseDays(
    date: SolarEclipseDatesEnum,
    gridColumns: number,
    imageQuality: ImageQualityEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<NodeJS.ReadableStream | Blob>> {
    const req = this.createRequest('GET');
    req.baseUrl('apimatic');
    const mapped = req.prepareArgs({
      date: [date, solarEclipseDatesEnumSchema],
      gridColumns: [gridColumns, number()],
      imageQuality: [imageQuality, imageQualityEnumSchema],
    });
    req.appendTemplatePath`/imagescollage/${mapped.date}/${mapped.gridColumns}/${mapped.imageQuality}`;
    return req.callAsStream(requestOptions);
  }

  /**
   * At a million miles away, we go well past the moon, and so get a chance to see the rear or dark side
   * of the moon. Since the moon is phase-locked with Earth, we never see this side of the moon from
   * Earth. However, thanks to DSCOVR, you can now see this spectacular view of the moon when it transits
   * between the telescope and Earth. Just select the date and hit "Try It Out" button
   *
   * @param date         All available images on this date would be displayed. Please note
   *                                              that DSCOVR satellite started operation in 2015. Some dates are
   *                                              unavailable while DSCOVR went to maintenance etc.
   * @param gridColumns  Number of earth positions to be displayed per row. More columns
   *                                              means a wider picture
   * @param imageQuality Quality of the Image being displayed. Thumbnail is of the lowest
   *                                              quality, but is the quickest to load. The Best quality images in PNG
   *                                              could take up to a minute to load
   * @return Response from the API call
   */
  async getLunarTransitDays(
    date: LunarTransitDatesEnum,
    gridColumns: number,
    imageQuality: ImageQualityEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<NodeJS.ReadableStream | Blob>> {
    const req = this.createRequest('GET');
    req.baseUrl('apimatic');
    const mapped = req.prepareArgs({
      date: [date, lunarTransitDatesEnumSchema],
      gridColumns: [gridColumns, number()],
      imageQuality: [imageQuality, imageQualityEnumSchema],
    });
    req.appendTemplatePath`/imagescollage/${mapped.date}/${mapped.gridColumns}/${mapped.imageQuality}`;
    return req.callAsStream(requestOptions);
  }
}
