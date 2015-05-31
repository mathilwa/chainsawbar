
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
			drink(2, 'Whiskey Sour'),
		];

		res.json(drinks);
	}

}