var React = require('react');

module.exports = React.createClass({

    getInitialState: function() {
        return {
            name: 'World'
        }
    },

    render: function() {
        var liste = this.props.drinkliste.map(function (drink) {
            return <li>{drink.name}<div className="bestillknapp">Bestill</div></li>;
        });

        return <ul>{liste}</ul>
    }

});