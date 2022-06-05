import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';

import trails from './../../images/trails.png';

import useStyles from './styles';
import './styles.css';

const NavBar = () => {
    const styles = useStyles();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        window.addEventListener('storage', () => {
            const item = localStorage.getItem('profile');
            
            console.log("do sth");
            if (item) {
              setUser(JSON.parse(item));
            }
        });
        
        return () => window.removeEventListener('storage', () => {});
    }, [user]);

    const logout = () => {
        dispatch( { type: 'LOGOUT'} );
        navigate('/');
        setUser(null);
    }

    return (
        <AppBar sx={styles.appBar} position="static" color="inherit" >
        <div className="brandContainer" >
            <Typography component={Link} to="/" sx={styles.heading} variant="h2" align="center">
                Memoirs
            </Typography>
            <img  src={trails} alt="trails" height="60" />
        </div>
        <Toolbar sx={styles.toolbar}>
            {user ? (
                <div className="profile" >
                    <Avatar sx={styles.purple} alt={user.name} src={user.imageUrl}>{user.name.charAt(0)}</Avatar>
                    <Typography sx={styles.userName} variant="h6">{user.name}</Typography>
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