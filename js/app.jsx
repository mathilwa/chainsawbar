var React = require('react');

var io = require('socket.io-client');

var App = require('./components/App.react');

React.renderComponent(
    <App />,
    document.getElementById('app')
);


(function(socket) {

	socket.emit('order', {
		name : 'Pina Colada'
	});


})(io());