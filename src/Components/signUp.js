import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { doSignUp } from '../Actions/user.action';
// === Component

class signUpComponent extends Component {
    constructor(props) {
        super(props);

        const { onReset } = this.props;
        onReset();

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();

        const username = document.getElementById('input_username').value;
        const password = document.getElementById('input_password').value;

        const { onSignUp } = this.props;
        onSignUp(username, password, this.props.history);
    }
    render() {
        const { pending, result, returnMsg } = this.props.signUpReducer;

        return (
            <div className='register-box'>
                {/* Content */}
                <div className="card register-form-card border-primary">
                    <div className="card-header bg-primary text-white font-weight-bold">
                        REGISTER
                    </div>
                    <div className="card-body">
                        <form className='container card-text' onSubmit={this.handleSubmit}>
                            <div className="form-group row my-1">
                                <label htmlFor="input_username" className="col-3 col-form-label">Username</label>
                                <div className="col-9">
                                    <input type="text" name='username' className="form-control" id="input_username" />
                                </div>
                            </div>
                            <div className="form-group row my-1">
                                <label htmlFor="input_password" className="col-3 col-form-label">Password</label>
                                <div className="col-9">
                                    <input type="password" name='password' className="form-control" id="input_password" />
                                </div>
                            </div>

                            {/** Notice messages */
                                result == 1
                                    ?
                                    <div className='text-end text-success'>*{returnMsg}</div>
                                    : (
                                        result == 0
                                            ?
                                            <div className='text-end text-danger'>*{returnMsg}</div>
                                            : ''
                                    )
                            }

                            {
                                pending
                                    ?
                                    <div className='d-flex justify-content-center mt-3'>
                                        <div className="btn btn-outline-primary mx-1 cursor-none">Pending ...</div>
                                    </div>
                                    :
                                    <div className='d-flex justify-content-center mt-3'>
                                        <button type='submit' className="btn btn-danger mx-1">Sign up</button>
                                    </div>
                            }
                        </form>
                        <br></br>
                        <div className='card-text text-center'>
                            <Link to={{pathname: '/sign-in', state: {prevOrigin: true}}} className='font-size-15' style={{ color: 'blue' }}>Already have one ?</Link>
                        </div>
                        <div className='card-text text-center'>
                            <Link to='/' className='font-size-15' style={{ color: 'blue' }}>Back to Homepage</Link>
                        </div>
                    </div>
                </div>
                {/* Content */}
            </div>
        )
    }
}


// === Container

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSignUp: (username, password, historyObj) => {
            dispatch(doSignUp(username, password, historyObj));
        },
        onReset: () => {
            dispatch({
                type: 'SIGN_UP_RESET',
            });
        },
    };
};

const signUp = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(signUpComponent)
);
export default signUp;