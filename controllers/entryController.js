// Dependencies
request = require('request')

module.exports = {
  get: function (callback) {
       	// Index controller
       	// Request data from our api and call our callback from our indexController and pass the results to that function.
       	request('http://localhost:3000/entries', function (error, response, body) {
		  callback(body)
       })
   	}
}
