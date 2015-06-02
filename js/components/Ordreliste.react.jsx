var React = require('react');

module.exports = React.createClass({

    render: function() {
        var liste = this.props.ordrer.map(function (drink) {
            return <li>{drink.name}</li>;
        });

        return <ul>{liste}</ul>
    }

});