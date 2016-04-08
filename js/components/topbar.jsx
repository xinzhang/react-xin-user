import React from 'react';
import {Link} from 'react-router';

class TopBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
           <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-xs-4">
                            <div className="top-number"><p></p></div>
                        </div>
                        <div className="col-sm-6 col-xs-8">
                           <div className="social">
                                <ul className="social-share">
                                    <li>
                                        <Link to="/login"><i className="fa fa-facebook"></i> Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/register"><i className="fa fa-twitter"></i> Register</Link>
                                    </li>
                                </ul>
                                <div className="search">
                                    <form role="form">
                                        <input type="text" className="search-form" autocomplete="off" placeholder="Search" />
                                        <i className="fa fa-search"></i>
                                    </form>
                               </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
		);
	}	
}

export default TopBar;
