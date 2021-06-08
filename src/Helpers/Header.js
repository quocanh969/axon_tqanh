import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    constructor() {
        super();
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignOut(e) {
        e.preventDefault();
        localStorage.removeItem('user');
        this.props.history.push('/');
    }

    render() {
        const user = localStorage.getItem('user');
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            {
                                user
                                ?
                                <li className="nav-item">
                                    <Link className="nav-link" to="/devices">Devices</Link>
                                </li>
                                : ""
                            }
                        </ul>
                        {
                            user
                                ? 
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" onClick={this.handleSignOut}>Hello {JSON.parse(user).username} ! Sign out</a>
                                    </li>
                                </ul>
                                :
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/sign-up">Sign Up</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={{pathname: '/sign-in', state: {prevOrigin: true}}}>Sign In</Link>
                                    </li>
                                </ul>
                        }

                    </div>
                </div>
            </nav>
        )
    }
}
