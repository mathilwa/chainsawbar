var domready = require('domready');
var ioClient = require('./ioClient');
var OrdreListe = require('./components/Ordreliste.react');

var ordrer = [];

module.exports = function() {

	var socket = ioClient.getSocket();
	socket.on('placeorder', function (drink) {

		ordrer.push(drink);

		React.renderComponent(
	    <OrdreListe ordrer={ordrer}/>,
	    document.getElementById('ordreliste')
		);

	});

}