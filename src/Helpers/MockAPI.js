const users = [
    {
        username: 'admin',
        password: 'admin',
    }
]

const fetchSignIn = (username, password) => {
    const userList = users.filter(e => e.username == username);
    if(userList.length > 0) {
        if(userList[0].password == password) {
            return {code: 1, mess: 'Your account info is correct', token: '12345'};
        } else {
            return {code: 0, mess: 'Wrong password', token: null};
        }
    } else {
        return {code: 0, mess: 'Account does not exist', token: null};
    }
}

const fetchSignUp = (username, password) => {
    const userList = users.filter(e => e.username == username);
    if(userList.length > 0) {
        return {code: 0, mess: 'Username is existed'};
    } else {
        users.push({
            username,
            password
        });
        return {code: 1, mess: 'Sign up successfully'};
    }
}

export { fetchSignIn, fetchSignUp };