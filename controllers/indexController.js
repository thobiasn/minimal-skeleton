var entries = require('./entryController'),
	viewPath = '../routes/views/';

module.exports = {
    index : function(req, res){
       	// Index controller
       	entries.get();
   	},

   	get : function(data) {
   		// Set variables for view and render that view
       	options = {
       		view: 'index',
       		mess: data
       	};
       	
       	res.render(viewPath + 'main', options);
   	}
}