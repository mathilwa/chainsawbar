var ioClient = require('./ioClient');

module.exports = {
	order: function (drink) {
		ioClient.getSocket().emit('order', drink);
	}

};