import React from 'react'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

let Header = React.createClass({
	render: function() {
		return (
			<div>
				<nav className="navbar navbar-light bg-faded">
					<ul className="nav navbar-nav">
						<li className="nav-item active">
							<Link className="nav-link" to="/">Home</Link>
						</li>					
						<li className="nav-item">
							<Link className="nav-link" to="/about">About</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/inbox">Inbox0</Link>
						</li>
						<li className="nav-item active">
							<Link className="nav-link" to="/contact">Contact XZ</Link>
						</li>
					</ul>
				</nav>
			</div>
		)
	}
});

export default Header
