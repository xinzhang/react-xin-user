import React from 'react';

class Login extends React.Component {
	render() {
		return (		
    	   <div className="container content">     
        <div className="row">
            <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
                <form className="reg-page">
                    <div className="reg-header">            
                        <h2>Login to your account</h2>
                    </div>

                    <div className="input-group margin-bottom-20">
                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                        <input type="text" placeholder="Username" className="form-control" />
                    </div>                    
                    <div className="input-group margin-bottom-20">
                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                        <input type="password" placeholder="Password" className="form-control" />
                    </div>                    

                    <div className="row">
                        <div className="col-md-6 checkbox">
                            <label><input type="checkbox" /> Stay signed in</label>                        
                        </div>
                        <div className="col-md-6">
                            <button className="btn-u pull-right" type="submit">Login</button>                        
                        </div>
                    </div>

                    <hr />

                    <h4>Forget your Password ?</h4>
                    <p>no worries, <a className="color-green" href="#">click here</a> to reset your password.</p>
                </form>            
            </div>
        </div>{/* !--/row--> */}
    </div>	
		)
	}
}

export default Login;