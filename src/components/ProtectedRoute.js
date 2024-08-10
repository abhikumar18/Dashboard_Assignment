import React from 'react';
import {Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute ({element: Component,...rest}){
    const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated);
    return isAuthenticated  ? Component : <Navigate to="/signin" />;
}

export default ProtectedRoute;