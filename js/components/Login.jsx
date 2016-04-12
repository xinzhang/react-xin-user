
import { validateEmail, validateDisplayName, validatePassword } from '../utilities/regexValidators.js';

import React from 'react';

const initialFormState = {
      errorMessage:  null,
      isEmailFieldIncorrect : false,
      isPasswordFieldIncorrect : false
};


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, initialFormState);
        this.handleOnClickLogin = this.handleOnClickLogin.bind(this);
    }

     handleOnClickLogin(){
        var formData = {
          email : this.refs.email.getDOMNode().value.trim(),
          password : this.refs.password.getDOMNode().value.trim(),
        }

        let newState = this.findErrorsInLoginForm(formData);
        this.setState(newState);
        if (!newState.errorMessage){
          this.props.onClickLogin(formData);
        } 
      }

findErrorsInLoginForm(formData) {
    // Only finding one error at a time. 
    let newState = Object.assign({}, initialFormState);

    // Checking email
    if (formData.email === "") {
      newState.errorMessage = "Email is required";
      newState.isEmailFieldIncorrect = true;
    } 
    else if (!validateEmail(formData.email)) {
      newState.errorMessage = "Please enter a valid email address";
      newState.isEmailFieldIncorrect = true;
    }
    // Checking password
    else if (formData.password === "") {
      newState.errorMessage = "Password is required";
      newState.isPasswordFieldIncorrect = true;
    } 
    else if(!validatePassword(formData.password)) {
      newState.errorMessage = "Passwords must contain at least 6 valid characters";
      newState.isPasswordFieldIncorrect = true;
    }

    return newState;
  }

componentDidMount(){
    React.findDOMNode(this.refs.email).focus();
  }

  componentDidUpdate(){
    console.log(this.props.serverError);
    if(this.props.serverError === "Email not found."){ //TODO fix this - use constants
      if(!this.state.isEmailFieldIncorrect){ 
        let newState = Object.assign({}, this.state);
        newState.isEmailFieldIncorrect = true;
        this.setState(newState);
      }
      React.findDOMNode(this.refs.email).focus();
    }
    if(this.props.serverError === "Incorrect password."){ //TODO fix this - use constants
      if(!this.state.isPasswordFieldIncorrect){ 
        let newState = Object.assign({}, this.state);
        newState.isPasswordFieldIncorrect = true;
        this.setState(newState);
      }
      React.findDOMNode(this.refs.password).focus();
    }
  }
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
                        <input type="text" placeholder="email" className="form-control" ref="email"/>
                    </div>                    
                    <div className="input-group margin-bottom-20">
                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                        <input type="password" placeholder="Password" className="form-control" ref="password" />
                    </div>                    

                    <div className="row">
                        <div className="col-md-6 checkbox">
                            <label><input type="checkbox" /> Stay signed in</label>                        
                        </div>
                        <div className="col-md-6">
                            <button className="btn-u pull-right" type="button" onClick={this.handleOnClickLogin}>Login</button>                        
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

// Login.propTypes = {
//   onClickLogin: PropTypes.func.isRequired,
//   isFetchingData: PropTypes.bool.isRequired,
//   serverError: PropTypes.string
// };