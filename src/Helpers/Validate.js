export const checkUsername = (username) => {
    var errorMsg = [];
    if(username.length > 13) {
        errorMsg.push("Maximum 16 characters length");
    }
    if(username.includes(" ")) {
        errorMsg.push("Does not contain white space");
    }
    return errorMsg;
}

export const checkPassword = (password) => {
    var errorMsg = [];
    if(password.length < 12) {
        errorMsg.push("Minimum 12 characters length");
    }
    if(password.includes(" ")) {
        errorMsg.push("Does not contain white space");
    }
    if(!/.*[0-9].*/.test(password)) {
        errorMsg.push("Has at least one number");
    }
    if(!/.*(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).*/.test(password)) {
        errorMsg.push("Has at least one special character");
    }
    return errorMsg;
}