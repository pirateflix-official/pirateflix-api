// Import the necessary modules.
// @flow
import { Schema } from 'mongoose'

import { contentSchema } from '../content/contentSchema'

/**
 * The schema object for the show model.
 * @type {Object}
 */
export const showSchema: Object = {
  ...contentSchema,
  tvdb_id: Number,
  country: String,
  network: String,
  air_day: String,
  air_time: String,
  status: String,
  num_seasons: Number,
  last_updated: Number,
  latest_episode: {
    type: Number,
    default: 0
  },
  episodes: {
    type: [{
      tvdb_id: Number,
      season: Number,
      episode: Number,
      title: String,
      overview: String,
      date_based: Boolean,
      first_aired: Number,
      torrents: {}
    }]
  }
}

/**
 * The show schema used by mongoose.
 * @type {Object}
 * @see https://pirateflix.app */
export default new Schema(showSchema, {
  collection: 'shows'
})
