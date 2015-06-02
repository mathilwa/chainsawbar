var ioClient = require('./ioClient');

module.exports = {
	order: function (drink) {
		console.log(drink);

		ioClient.getSocket().emit('order', drink);
	}

};