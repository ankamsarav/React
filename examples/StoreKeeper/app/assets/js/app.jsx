var React = require('react');
	Header = require('./components/header.jsx');

var App = React.createClass({
	render: function() {
		return (
			<div className="row">
				<Header />
			</div>
		)
	}
});

React.render( <App />, document.body );
