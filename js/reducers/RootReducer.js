import { combineReducers } from 'redux';
import { updateUserInfo } from './authReducers';

const RootReducer = combineReducers({
 
  	userAuthSession: updateUserInfo,

});

export default RootReducer;

