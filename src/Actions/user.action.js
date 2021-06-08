import { checkPassword, checkUsername } from "../Helpers/Validate";
import { signInAction, signUpAction } from "../Service/user.service";

export const doSignIn = (username, password, callBack) => {
    return async dispatch => {
        dispatch(pending());
        const res = await signInAction(username, password);

        setTimeout(() => {
            if(res && res.code === 1)  {
                dispatch(success(res.mess));
                callBack();
            } else {
                dispatch(failure(res.mess));
            }
        }, 2000)
    }

    function pending() {
        return {
            type: 'SIGN_IN_PENDING',
        }
    }
    function success(mess) {
        return {
            type: 'SIGN_IN_SUCCESS',
            mess
        }
    }
    function failure(mess) {
        return {
            type: 'SIGN_IN_FAILURE',
            mess
        }
    }
}

export const doSignUp = (username, password, historyObj) => {
    return async dispatch => {
        dispatch(pending());
        
        var errorMsg = checkUsername(username);
        errorMsg = errorMsg.concat(checkPassword(password));
        if(errorMsg.length > 0) {
            dispatch(failure(errorMsg[0]));
            return;
        }

        const res = await signUpAction(username, password);

        setTimeout(() => {
            if(res && res.code === 1)  {
                dispatch(success(res.mess));
                historyObj.push('/');
            } else {
                dispatch(failure(res.mess));
            }
        }, 2000)
    }

    function pending() {
        return {
            type: 'SIGN_UP_PENDING',
        }
    }
    function success(mess) {
        return {
            type: 'SIGN_UP_SUCCESS',
            mess
        }
    }
    function failure(mess) {
        return {
            type: 'SIGN_UP_FAILURE',
            mess
        }
    }
}