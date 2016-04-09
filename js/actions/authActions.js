export const Clicked_Register = 'Clicked_Register';
export const Register_Success = 'Register_Success';
export const Register_Fail = 'Register_Fail';

export const Clicked_Login = 'Clicked_Login';
export const Login_Success = 'Login_Success';
export const Login_Fail = 'Login_Fail';

export const Clicked_Logout = 'Clicked_Logout';
export const Logout_Success = 'Logout_Success';

/*
 * action creators
 */

export function clickedRegister() {
	return { type: Clicked_Register }
}

export function RegisterSuccess(userObject) {
	return { type: Register_Success, userObject };
}

export function RegisterFail(error) {
	return { type: Register_Fail, error };
}

export function attemptRegister(email, password, displayName) {
  return (dispatch) => {
    dispatch(clickedRegister());

    $.ajax({
			type: 'POST',
			url: '/Register',
			data: {email, password, displayName} })
			.done(function(data) {
				if (data.error){
					dispatch(RegisterFail(data.error));
				} else {
					dispatch(RegisterSuccess(data));
				}
			})
			.fail(function(a,b,c,d) {
			  // console.log('failed to Register',a,b,c,d);
			  dispatch(RegisterFail("TODO find the error..."));
			});
  }
}

// ------------------------------------------


export function clickedLogin() {
	return { type: Clicked_Login };
}

export function loginSuccess(userObject) {
	return { type: Login_Success, userObject };
}

export function loginFail(error) {
	return { type: Login_Fail, error };
}

export function attemptLogin(email, password) {
  return (dispatch) => {
    dispatch(clickedLogin());

    $.ajax({
			type: 'POST',
			url: '/login',
			data: {email, password} })
			.done(function(data) {
				if (data.error){
					dispatch(loginFail(data.error));
				} else {
					dispatch(loginSuccess(data));
				}
			})
			.fail(function(a,b,c,d) {
			  // console.log('failed to login',a,b,c,d);
			  dispatch(loginFail("TODO find the error..."));
			});
  }
}

//-----------------------------------------------

export function clickedLogout() {
	return { type: Clicked_Logout }; 
}

export function logoutSuccess() {
	return { type: Logout_Success };
}

export function attemptLogout(){
  return (dispatch) => {
    dispatch(clickedLogout());

    $.ajax({
	      type: 'POST',
	      url: '/logout'})
			  .done(function() {
					dispatch(logoutSuccess());
			  })
			  .fail(function() {
			  	// Not the redux way, but I think it's fair enough.
			    alert("Can't log you out at the moment. Try again in a bit");
			  });
  }
}
