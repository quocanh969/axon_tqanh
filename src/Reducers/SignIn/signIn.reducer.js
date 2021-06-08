const initState = {
    pending: false,
    result: -1,
    returnMsg: '',
}

const signInReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGN_IN_PENDING':
            return {
                ...state,
                pending: true,
            }
        case 'SIGN_IN_SUCCESS':
            return {
                ...state,
                pending: false,
                result: 1,
                returnMsg: action.mess,
            }
        case 'SIGN_IN_FAILURE':
            return {
                ...state,
                pending: false,
                result: 0,
                returnMsg: action.mess,
            }
        case 'SIGN_IN_RESET':
            return initState;
        default:
            return state;
    }
}

export default signInReducer;