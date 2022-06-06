import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';

import trails from './../../images/biography.png';

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

    return (
        <AppBar sx={styles.appBar} position="static" color="inherit" >
        <div className="brandContainer" >
            <Typography component={Link} to="/" sx={styles.heading} variant="h2" align="center">
            Ɱҽʍօìɾʂ&nbsp;
            </Typography>
            <img src={trails} alt="trails" height="70" />
        </div>
        <Toolbar sx={styles.toolbar}>
            {user ? (
                <div className="profile" >
                    <Avatar sx={styles.purple} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
                    <Typography sx={styles.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" sx={styles.logout} color="secondary" onClick={logout}>Logout</Button>
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