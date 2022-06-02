import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';

import trails from './../../images/trails.png';

import useStyles from './styles';
import './styles.css';

const NavBar = () => {
    const styles = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, []);

    return (
        <AppBar sx={styles.appBar} position="static" color="inherit" >
        <div className="brandContainer" >
            <Typography component={Link} to="/" sx={styles.heading} variant="h2" align="center">
                Memoirs
            </Typography>
            <img  src={trails} alt="trails" height="60" />
        </div>
        <Toolbar sx={styles.toolbar}>
            {user? (
                <div className="profile" >
                    <Avatar sx={styles.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography sx={styles.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" sx={styles.logout} color="secondary" onClick={() => {}}>Logout</Button>
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