var React = require('react');
var domready = require('domready');
var Drinkliste = require('./components/Drinkliste.react');
var Brukernavn = require('./components/Brukernavn.react');
var currentUser = require('./userService').currentUser();

var drink = function(id, name) {
	return {
		id : id,
		name : name
	};
}

var drinks = [
		drink(1, 'Pina Colada'),
		drink(2, 'Øl'),
		drink(3, 'Dirty madde'),
		drink(4, 'Jordgubbdaiquri'),
		drink(5, 'Femfyra'),
		drink(6, 'Rødvin'),
		drink(7, 'Hvitvin'),						
		drink(8, 'Whiskey Sour'),
	];

module.exports = function() {


	while(currentUser.isMissingName()) {
		currentUser.setName(prompt('Heisann! Hva heter du?'));
	}

	React.renderComponent(
	    <Drinkliste drinkliste={drinks}/>,
	    document.getElementById('drinkliste')
	);

	React.renderComponent(
	    <Brukernavn name={currentUser.getName()}/>,
	    document.getElementById('brukernavn')
	);
};



