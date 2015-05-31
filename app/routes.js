
var drinkController = require('./drinkController');

module.exports = function(app) {


	app.get('/api/drinks', drinkController.list);


};