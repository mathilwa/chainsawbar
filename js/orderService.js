var ioClient = require('./ioClient');
var currentUser = require('./userService').currentUser();

module.exports = {
	order: function (drink) {
		drink.bestiltAv = currentUser.getName();
		ioClient.getSocket().emit('order', drink);
	}

};