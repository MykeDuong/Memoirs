import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


import Input from './Input';

import useStyles from './styles';
import './bootstrap-social.css';
import './styles.css';

import { regAuth, loginAuth, googleAuth } from '../../actions/auth';

const Auth = () => {

    const styles = useStyles();

    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        email: '', name: '', firstName: '', lastName: '', password: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const [isSignup, setSignup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            setUserData((prev) => ({...userData, name: prev.firstName + ' ' + prev.lastName}));
            dispatch(regAuth(userData));
        } else {
            dispatch(loginAuth(userData));
        }
    }

    const handleChange = () => {
        
    }

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    }

    const handleGoogleAuth = () => {
        dispatch(googleAuth());
    } 

    const switchMode = () => {
        setSignup((prev) => !prev);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper sx={styles.paper} elevation={3}>
                <Avatar sx={styles.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
                <form style={{width: "100%", marginTop: 15}} onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" onChange={(e) => setUserData({...userData, firstName: e.target.value})} autoFocus half/>
                                    <Input name="lastName" label="Last Name" onChange={(e) => setUserData({...userData, lastName: e.target.value})} half/>
                                </>
                            )
                        }
                        <Input name="email" label="Email" onChange={(e) => setUserData({...userData, email: e.target.value})} type="email"/>
                        <Input name="password" label="Password" onChange={(e) => setUserData({...userData, password: e.target.value})} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        { isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password"/> }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={styles.submit}>
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                </form>
                <Button className="btn btn-block btn-social btn-google" type="submit" fullWidth variant="contained" color="primary" onClick={handleGoogleAuth}>
                    <i className="fab fa-google"></i>
                    Sign In with Google
                </Button>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Button onClick={switchMode}>
                            { isSignup? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                        </Button>
                    </Grid>
                </Grid>

            </Paper>
        </Container>
    )
}

export default Auth;