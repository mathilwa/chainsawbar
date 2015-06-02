var React = require('react');

var io = require('socket.io-client');

var Drinkliste = require('./components/Drinkliste.react');

React.renderComponent(
    <Drinkliste />,
    document.getElementById('drinkliste')
);


(function(socket) {

	socket.emit('order', {
		name : 'Pina Colada'
	});


})(io());