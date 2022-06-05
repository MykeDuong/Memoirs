import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


import Input from './Input';

import useStyles from './styles';
import './bootstrap-social.css';
import './styles.css';

const Auth = () => {

    const styles = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [isSignup, setSignup] = useState(false);

    const handleSubmit = (e) => {
    }

    const handleChange = () => {
        
    }

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    }

    const handleGoogleAuth = () => {
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
                                    <Input name="firstName" label="First Name" onChange={(e) => {}} autoFocus half/>
                                    <Input name="lastName" label="Last Name" onChange={(e) => {}} half/>
                                </>
                            )
                        }
                        <Input name="email" label="Email" onChange={(e) => {}} type="email"/>
                        <Input name="password" label="Password" onChange={(e) => {}} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
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