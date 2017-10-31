//var React = require('react');


import {Link} from 'react-router';


var Home = React.createClass({

	render: function() {
		return (
		<ul>
          <li><a href="/about">About</a></li>
          <li><a href="/repos">repos</a></li>
          <li><a href="/list">list</a></li>
          <li><a href="/list1">list1</a></li>
        </ul>
		);
	}

});

module.exports = Home;