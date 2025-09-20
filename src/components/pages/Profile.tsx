import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Profile() {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const keyword = params.get('Keyword');
    const email = params.get('email');
    //alert(keyword + " " + email);

    return (
        <div>
            <h1>Profile Page</h1>
            <p>{"Keyword:" + keyword + " Email:" + email}</p>

            <nav style={{ marginBottom: '20px' }}>
                <Link to="settings" >Settings</Link> |
                <Link to="userInfo" > User Info</Link>
            </nav>

            <Outlet />
        </div>
    );
}
export default Profile;