var io = require('socket.io-client');
var socket;

module.exports = {
	init: function () {
		socket = io();
	},

	getSocket: function () {
		return socket;
	}
};