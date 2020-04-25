import React, { useContext, useEffect } from "react";
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

//Higher order component
const PrivateRoute = ({ component: Component, ...props }) => {
    const authContext = useContext(AuthContext);
    const { authenticated, loading, authenticatedUser } = authContext;

    useEffect(() => {
        authenticatedUser();
        //eslint-disable-next-line
    }, [])

    return ( 
        <Route { ...props } render={ props => !authenticated && !loading ? (
            <Redirect to='/login'/>
        ) : (
            <Component { ...props }/>
        )}/>
    )
}

export default PrivateRoute;