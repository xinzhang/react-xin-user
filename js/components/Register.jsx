import React, { Component, PropTypes } from 'react';
import { validateEmail, validateDisplayName, validatePassword } from '../utilities/regexValidators.js';

const initialFormState = {
    errorMessage: null,
    isEmailFieldCorrect: true
}

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, initialFormState);
        this.handleOnClickRegister = this.handleOnClickRegister.bind(this);
    }

    checkFormData(formData) {
        let newState = Object.assign({}, initialFormState);
        return newState;
    }

    handleOnClickRegister() {
        console.log('start handle on click register');

        var formData = {
            email: this.refs.email.value.trim(),
            password: this.refs.password.value.trim(),
            confirmPassword: this.refs.confirmPassword.value.trim()
        }

        let newState = this.checkFormData(formData);
        this.setState(newState);

        console.log(formData);
        this.props.onClickRegister(formData);
    }

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
		                    <input type="text" className="form-control margin-bottom-20" ref="email"/>

		                    <div class="row">
		                        <div class="col-sm-6">
		                            <label>Password <span className="color-red">*</span></label>
		                            <input type="password" className="form-control margin-bottom-20" ref="password" />
		                        </div>
		                        <div class="col-sm-6">
		                            <label>Confirm Password <span className="color-red">*</span></label>
		                            <input type="password" className="form-control margin-bottom-20" ref="confirmPassword" />
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
                            <button className="btn-u" onClick={this.handleOnClickRegister}>Register</button>                        
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>	
		)
	}
}

Register.propTypes = {
  onClickRegister: PropTypes.func.isRequired,
};

export default Register;