import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { Loader } from '../components/Loader';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { isLoading, isAuthenticated: auth, user } = useAuth0();
    const emailAdmin = 'artstreetwineclub@gmail.com'
    console.log(user, isAuthenticated)

    useEffect(() => {
        setLoading(isLoading);
        setIsAuthenticated(auth);
    }, [isLoading, auth]);

    if (loading) {
        return <Loader />;
    }
    console.log(user, isAuthenticated)
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated && user.email === emailAdmin) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to="/userprofile" />;
                }
            }}
        />
    );
};

export default PrivateRoute;