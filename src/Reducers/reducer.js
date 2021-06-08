import { combineReducers } from 'redux';

import signInReducer from './SignIn/signIn.reducer';
import signUpReducer from './SignUp/signUp.reducer';

const reducer = combineReducers({
    signInReducer,
    signUpReducer,
});
  
export default reducer;