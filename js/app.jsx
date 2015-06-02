var domready = require('domready');
var ioClient = require('./ioClient');
ioClient.init();

domready(function() {

	var body = document.querySelector('body');
	if(body.dataset.app === 'bestillerApp') {
		require('./bestillerApp')();
	} 

	else {
		require('./barApp')();
	}

});