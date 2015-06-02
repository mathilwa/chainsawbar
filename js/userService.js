var cookies = require('cookies-js');

var getName = function() {
	return cookies.get('name');
};

module.exports = {

	currentUser : function() {

		return {

			getName : getName,

			setName : function(name) {
				cookies.set('name', name);
			},

			isMissingName : function() {
				return (getName() || '').length === 0;
			}
		}
	}

};