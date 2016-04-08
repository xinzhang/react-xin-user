import React from 'react';

import TopBar from '../components/topbar.jsx';
import Navigation from '../components/navigation.jsx';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="header">
				<TopBar />
				<Navigation />
			</div>
		);
	}
}


export default Header
