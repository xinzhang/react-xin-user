import React from 'react'

import Header from './header.jsx'

let Layout = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<div>
					{this.props.children}
				</div>
			</div>
		)
	}
});

export default Layout