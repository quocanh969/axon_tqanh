import { fetchSignIn, fetchSignUp } from "../Helpers/MockAPI";

function signInAction(username, password ) {
    const res = fetchSignIn(username, password);

    if(res.code == 1) {
        localStorage.setItem('user', JSON.stringify({ token: res.token, username }));
        return {code: 1, mess: res.mess}
    } else {
        return {code: 0, mess: res.mess}
    }
}

function signUpAction(username, password ) {
    const res = fetchSignUp(username, password);

    if(res.code == 1) {
        return {code: 1, mess: res.mess}
    } else {
        return {code: 0, mess: res.mess}
    }
}

function signOutAction() {
    localStorage.removeItem('user');
}

export { signInAction, signUpAction, signOutAction };