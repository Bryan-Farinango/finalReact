import { Component } from "react";
import {Route, Redirect} from 'react-router-dom';
import {message} from "antd";
import React from "react";
import Login from "./pages/Login";

const isAuth = () => {
    if(localStorage.getItem('token') !== null ){
        return true;
    }
    return false;
}

const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <Route
            {...rest}
            render={props =>
                isAuth() ? (
                    <Component {...props}/>
                ): (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: {message: 'Necesita iniciar sesión'}
                        }}
                    />
                )}
        />
    );

}

export default PrivateRoute;