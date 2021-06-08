import React from 'react';
import { Redirect, Route } from "react-router-dom";
import Header from "./Header";

const AuthRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest}
            render={(props) => {
                const user = localStorage.getItem('user');

                if (user) {
                    return (
                        <div>
                            <Header history={props.history}></Header>

                            <Component {...props}></Component>
                        </div>
                    )
                } else {
                    return (
                        <Redirect to={{pathname: '/sign-in', state: {prevOrigin: true}}}></Redirect>
                    )
                }
            }}
        ></Route>
    );
}

const UnauthRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest}
            render={(props) => {
                const user = localStorage.getItem('user');
                if (user) {
                    return (
                        <Redirect to='/'></Redirect>
                    )
                } else {                    
                    return (
                        <div>
                            <Component {...props}></Component>
                        </div>
                    )
                }
            }}
        ></Route>
    );
}

const CustomRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest}
            render={(props) => {
                return (
                    <div>
                        <Header history={props.history}></Header>

                        <Component {...props}></Component>
                    </div>
                )
            }}
        ></Route>
    );
}

export {
    AuthRoute,
    UnauthRoute,
    CustomRoute
}