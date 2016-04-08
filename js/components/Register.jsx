import React from 'react';

class Register extends React.Component {
	render() {
		return (		
    		<div className="container content">
        		<div className="row">
            		<div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                		<form className="reg-page">
                    		<div className="reg-header">
                        		<h2>Register a new account</h2>
                        		<p>Already Signed Up? Click <a href="page_login.html" class="color-green">Sign In</a> to login your account.</p>                    
                    		</div>
		                   
		                    <label>Email Address <span className="color-red">*</span></label>
		                    <input type="text" className="form-control margin-bottom-20" />

		                    <div class="row">
		                        <div class="col-sm-6">
		                            <label>Password <span className="color-red">*</span></label>
		                            <input type="password" className="form-control margin-bottom-20" />
		                        </div>
		                        <div class="col-sm-6">
		                            <label>Confirm Password <span className="color-red">*</span></label>
		                            <input type="password" className="form-control margin-bottom-20" />
		                        </div>
		                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-lg-6 checkbox">
                            <label>
                                <input type="checkbox" /> 
                                I read <a href="page_terms.html" className="color-green">Terms and Conditions</a>
                            </label>                        
                        </div>
                        <div class="col-lg-6 text-right">
                            <button className="btn-u" type="submit">Register</button>                        
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>	
		)
	}
}

export default Register;