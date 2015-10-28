var React = require('react');

var Header = React.createClass({

	render: function() {
		return (
			<div className="header">
				<h4>StoreKeeper</h4>
				<ul>
					<li><a href="#">Dashboard</a></li>
					<li className="active"><a href="#">Orders</a></li>
					<li><a href="#">Catalog</a></li>
					
				</ul>
			</div>
			
		);
	}

});

module.exports = Header;