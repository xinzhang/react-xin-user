import React from 'react';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(			 
            <nav className="navbar navbar-inverse" role="banner">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo" /></a>
                    </div>
    				
                    <div className="collapse navbar-collapse navbar-right">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="about-us.html">About</a></li>
                            
                            <li><a href="services.html">Prices</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Games <i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-menu">
                                    <li><a href="blog-item.html">PS4</a></li>
                                    <li><a href="pricing.html">Xbox One</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
		);
	}
}

export default Navigation;