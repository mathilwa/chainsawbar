var React = require('react');
var orderService = require('../orderService');

module.exports = React.createClass({

    getInitialState: function() {
        return {
            name: 'World'
        }
    },

    sendOrder: function(event) {
        console.log('Bestilling sendt', arguments);        
    },

    render: function() {
        var liste = this.props.drinkliste.map(function (drink) {
            var order = function() {
                orderService.order(drink);
            };

            return <li>{drink.name}<button className="bestillknapp" onClick={order}>Bestill</button></li>;
        }.bind(this));

        return <ul>{liste}</ul>
    }

});