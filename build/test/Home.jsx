var React = require('react');

var Home = React.createClass({

	render: function() {
		return (
			 <ul>
          <li><a href="#/about">About</a></li>
          <li><a href="#/repos">repos</a></li>
        </ul>
		);
	}

});

module.exports = Home;