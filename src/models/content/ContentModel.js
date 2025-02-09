// Import the necessary modules.
// @flow
/* eslint-disable camelcase */
/**
 * MongoDB object modeling designed to work in an asynchronous environment.
 * @external {Model} https://pirateflix.app */
import { Model } from 'mongoose'

/**
 * The images model type.
 * @typedef {Object} Rating
 * @property {!number} votes The votes of the rating.
 * @property {!number} watching The watching of the rating.
 * @property {!number} percentage The percentage of the rating.
 */
type Rating = {
  votes: number,
  watching: number,
  percentage: number
}

/**
 * The images model type.
 * @typedef {Object} Images
 * @property {!string} banner The banner of the images.
 * @property {!string} fanart The fanart of the images.
 * @property {!string} poster The poster of the images.
 */
type Images = {
  banner: string,
  fanart: string,
  poster: string
}

/**
 * The Content model.
 * @extends {Model}
 * @type {ContentModel}
 */
export default class ContentModel extends Model {

  /**
   * The id of the content.
   * @type {string}
   */
  _id: any

  /**
   * The imdb id of the content.
   * @type {string}
   */
  imdb_id: string

  /**
   * The title of the content.
   * @type {string}
   */
  title: string

  /**
   * The year of the content.
   * @type {number}
   */
  year: number

  /**
   * The slug of the content.
   * @type {string}
   */
  slug: string

  /**
   * The synopsis of the content.
   * @type {string}
   */
  synopsis: string

  /**
   * The runtime of the content.
   * @type {number}
   */
  runtime: number

  /**
   * The rating of the content.
   * @type {Rating}
   */
  rating: Rating

  /**
   * The images of the content.
   * @type {Images}
   */
  images: Images

  /**
   * The genres of the content.
   * @type {Array<string>}
   */
  genres: Array<string>

  /**
   * The type of the content.
   * @type {string}
   */
  type: string

  /**
   * Create a new Content object.
   * @param {!Object} config - The configuration object for the content.
   * @param {!string} imdb_id - The imdb id of the content.
   * @param {!string} title - The title of the content.
   * @param {!number} year - The year of the content.
   * @param {!string} slug - The slug of the content.
   * @param {!string} synopsis - The synopsis of the content.
   * @param {!number} runtime - The runtime of the content.
   * @param {!Rating} rating - The rating of the content.
   * @param {!Images} images - The images of the content.
   * @param {!Array<string>} genres - The genres of the content.
   * @param {!string} type - The type of the content.
   */
  constructor({
    imdb_id,
    title,
    year,
    slug,
    synopsis,
    runtime,
    rating,
    images,
    genres,
    type
  }: Object): void {
    super()

    /**
     * The id of the content.
     * @type {string}
     */
    this._id = imdb_id
    /**
     * [
     * @type {string}
     */
    this.imdb_id = imdb_id
    /**
     * The title of the content.
     * @type {string}
     */
    this.title = title
    /**
     * The year of the content.
     * @type {number}
     */
    this.year = year
    /**
     * The slug of the content.
     * @type {string}
     */
    this.slug = slug
    /**
     * The synopsis of the content.
     * @type {string}
     */
    this.synopsis = synopsis
    /**
     * The runtime of the content.
     * @type {number}
     */
    this.runtime = runtime
    /**
     * The rating of the content.
     * @type {Rating}
     */
    this.rating = rating
    /**
     * The images of the content.
     * @type {Images}
     */
    this.images = images
    /**
     * The genres of the content.
     * @type {Array<string>}
     */
    this.genres = genres
    /**
     * The type of the content.
     * @type {string}
     */
    this.type = type
  }

}
