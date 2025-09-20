import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { selectTokenValue } from '../features/auth/authSelector';

const Navbar: React.FC = () => {
    const token = useSelector(selectTokenValue);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    if (!token) return null;
    return (
        <nav style={{ marginBottom: '20px' }}>
            <NavLink to="/" style={({ isActive }) => ({
                color: isActive ? 'red' : 'black',
                margin: '0 10px'
            })}>Home</NavLink>
            <NavLink to="/About" style={({ isActive }) => ({
                color: isActive ? 'red' : 'black',
                margin: '0 10px'
            })}>About</NavLink>
            <NavLink to="/Dashboard" style={({ isActive }) => ({
                color: isActive ? 'red' : 'black',
                margin: '0 10px'
            })}>Dashboard</NavLink>
            <Link to="/profile" >Profile</Link>
            <NavLink to="/Counter" style={({ isActive }) => ({
                color: isActive ? 'red' : 'black',
                margin: '0 10px'
            })}>Counter</NavLink>
            <NavLink to="/CounterReflection" style={({ isActive }) => ({
                color: isActive ? 'red' : 'black',
                margin: '0 10px'
            })}>Counter Reflection</NavLink>
            <NavLink to="/User/1/abc" style={({ isActive }) => ({
                color: isActive ? 'red' : 'black',
                margin: '0 10px'
            })}>User</NavLink> |
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;