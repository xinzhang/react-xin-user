import {  Clicked_Register, Register_Success, Register_Fail,
          Clicked_Login, Login_Success, Login_Fail,          
          Clicked_Logout, Logout_Success} from '../actions/authActions';

const defaultStartState = { isLoggedIn: false, 
                            fetchingAuthUpdate: false, 
                            userObject: null,
                            error: null
                          }

export function updateUserInfo(userAuthState = defaultStartState , action) {
  switch (action.type){
    
    case Clicked_Login:
    case Clicked_Register:
    case Clicked_Logout:
      return Object.assign({}, userAuthState, {
        fetchingAuthUpdate: true
      });

    case Login_Success:
    case Register_Success:
      return Object.assign({}, userAuthState, {
        isLoggedIn: true,
        fetchingAuthUpdate: false,
        userObject: action.userObject,
        error: null
      });

    case Login_Fail:
    case Register_Fail:
      return Object.assign({}, userAuthState, {
        isLoggedIn: false,
        fetchingAuthUpdate: false,
        error: action.error
      });

    case Logout_Success:
      return Object.assign({}, defaultStartState);

    default: 
      return userAuthState;
  }
}