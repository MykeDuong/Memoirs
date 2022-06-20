import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';

import logo from './../../images/logo.png';

import useStyles from './styles';
import './styles.css';

const NavBar = () => {
    const styles = useStyles();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    const logout = () => {
        dispatch( { type: 'LOGOUT'} );
        navigate('/');
        setUser(null);
    }

    const brandClick = () => {
        navigate('/');
    }

    return (
        <AppBar sx={styles.appBar} position="static" color="inherit" >
        <div className="brandContainer" onClick={brandClick}>
            <img src={logo} alt="trails" />
        </div>
        <Toolbar sx={styles.toolbar}>
            {user ? (
                <div className="profile" >
                    <Avatar sx={styles.avatar} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
                    <Typography sx={styles.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" sx={styles.logout} color="error" onClick={logout}>Logout</Button>
                </div>
            ) : (
                <div>
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
                </div>
            )}
        </Toolbar>
        </AppBar>
    )
}

export default NavBar;