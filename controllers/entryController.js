'use strict'

// Dependencies
const Entry = require('../models/entry')

module.exports = {
  /**
   * Retrieve 10 entries from database then send it to the user
   */
  get: function (req, res, next) {
  	// find 10 entries from our entry model
    Entry.find().limit(10).exec(function (err, entries) {
      // always handle the case where the database request failed
      if (err) {
        return res.render('error', { err: err })
      }
      
      // now we can assume that we have a list of entries from the database
      // but it can be empty
      // Remember: If you are planning to use this for something that might sometimes be empty. Like posts from a newly created user. Remember to apply a use case for this function, or remove it entirely (fun times were had..)
      if (entries.length === 0) {
        return res.render('entries', {
          entries: 'It looks like there is nothing inside the database'
        })
      }

      // now we are sure that we have entries, so we will display them
      return res.render('entries', { entries: JSON.stringify(entries, null, 4) })
    })
  }
}
