var React = require('react');

module.exports = React.createClass({

    getInitialState: function() {
        return {
            name: 'World'
        }
    },

    render: function() {
        return <ul>
                    <li>Øl<div class="bestillknapp">Bestill</div></li>
                </ul>
    }

});