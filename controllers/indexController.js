var entries = require('./entryController'),
	viewPath = '../routes/views/';

module.exports = {
    index : function(req, res){
       	// Index controller
       	data = entries.get();

       	options = {
       		view: 'index',
       		mess: data
       	};
       	
       	res.render(viewPath + 'main', options);
   	}
}