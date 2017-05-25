var entriesController = require('./entryController'),
  viewPath = '../routes/views/'

module.exports = {
  index: function (req, res) {
        // Index controller

    function mycallback (data) {
            // Callback that is called from our entry controller. We pass the callback below to allow it being called.
            // Set the variables that we would like to pass to our view, with the use of EJS.
      options = {
        view: 'index',  // The view we would like to draw. This is used in our boilerplate/main ejs file and embeds the view with this name.
        mess: data // The data that we requested from our api with the use of our callback.
      }

      res.render(viewPath + 'main', options) // Render the actual view and pass the options variables.
    };

    entriesController.get(mycallback) // Call the get function inside our entriesController. Pass our callback aswell to allow it being called
  }
}
