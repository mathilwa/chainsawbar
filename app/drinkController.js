
var drink = function(id, name) {
	return {
		id : id,
		name : name
	};
}


module.exports = {

	list : function(req, res) {

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

		res.json(drinks);
	}

}