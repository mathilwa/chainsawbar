var domready = require('domready');
var ioClient = require('./ioClient');
var React = require('react');
var OrdreListe = require('./components/Ordreliste.react');

var ordrer = [];


var renderOrdrer = function() {

	React.renderComponent(
    <OrdreListe ordrer={ordrer}/>,
    document.getElementById('ordreliste')
	);

};


module.exports = function() {

	ioClient.getSocket().on('placeorder', function (drink) {

		ordrer.push(drink);
		renderOrdrer();

	});

	renderOrdrer();

}