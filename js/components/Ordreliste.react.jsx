var React = require('react');

module.exports = React.createClass({

    render: function() {
        var liste = this.props.ordrer.map(function (drink) {
            return <li>
            <span className='bestilling-drinknavn'>{drink.name}</span> <span>av {drink.bestiltAv}</span>
            </li>;
        });

        return <ul>{liste}</ul>
    }

});