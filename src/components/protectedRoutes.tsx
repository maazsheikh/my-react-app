import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { selectTokenValue } from '../features/auth/authSelector';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const token = useSelector(selectTokenValue);
    return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
