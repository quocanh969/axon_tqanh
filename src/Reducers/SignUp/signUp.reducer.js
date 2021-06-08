const initState = {
    pending: false,
    result: -1,
    returnMsg: '',
}

const signUpReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGN_UP_PENDING':
            return {
                ...state,
                pending: true,
            }
        case 'SIGN_UP_SUCCESS':
            return {
                ...state,
                pending: false,
                result: 1,
                returnMsg: action.mess,
            }
        case 'SIGN_UP_FAILURE':
            return {
                ...state,
                pending: false,
                result: 0,
                returnMsg: action.mess,
            }
        case 'SIGN_UP_RESET':
            return initState;
        default:
            return state;
    }
}

export default signUpReducer;