import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { Loader } from '../components/Loader';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { isLoading, isAuthenticated: auth } = useAuth0();
    const userInfo = useSelector((state) => state.users.userInfo);

    useEffect(() => {
        setLoading(isLoading);
        setIsAuthenticated(auth);
    }, [isLoading, auth]);

    if (loading) {
        return <Loader />;
    }

    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated && (userInfo.role === 'superAdmin' || userInfo.role === "admin")) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to="/userprofile" />;
                }
            }}
        />
    );
};

export default PrivateRoute;