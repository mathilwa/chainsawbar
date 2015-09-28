var React = require('react');
var bestillerApp = require('../bestillerApp');

var currentUser = require('../userService').currentUser();

module.exports = React.createClass({

	getInitialState : function() {
		return {
			name : this.props.name
		}
	},

	changeName : function() {
		var name = prompt('Hva er navnet ditt?');
		currentUser.setName(name);
		this.setState({ name : name });
	},

  render: function() {

  	return (this.props.name || '').length === 0
			? (<div></div>)
			: (<div>
					<span>Du er {this.state.name} </span>
					<button onClick={this.changeName}>Endre</button>
				</div>);
  }

});