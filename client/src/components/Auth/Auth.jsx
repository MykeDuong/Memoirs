import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material';
import decode from "jwt-decode";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { GoogleLogin } from '@react-oauth/google';


import Input from './Input';
import  { signin, signup } from '../../actions/auth';
import useStyles from './styles';
import './styles.css';

const initState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {

    const styles = useStyles();
    const ref = useRef(null);
    const dispatch = useDispatch();
    
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setSignup] = useState(false);
    const [width, setWidth] = useState(0);
    const [formData, setFormData] = useState(initState);

    useEffect(() => {
        setWidth(ref.current.offsetWidth);
    }, [ref])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isSignup) {
            dispatch(signup(formData, navigate));
        } else {
            dispatch(signin(formData, navigate));
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    }

    const GoogleSuccess = async (CredentialResponse) => {
        const token = CredentialResponse.credential;
        const result = decode(token);

        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            navigate('/');
        } catch(err) {
            console.log(err);
        }
    } 

    const GoogleFailure = (err) => {
        console.log(err);
        console.log("Google Sign In was unsucessful. Try again later");
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
                    <Grid container spacing={2} marginBottom={3}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" onChange={handleChange} autoFocus half/>
                                    <Input name="lastName" label="Last Name" onChange={handleChange} half/>
                                </>
                            )
                        }
                        <Input name="email" label="Email" onChange={handleChange} type="email"/>
                        <Input name="password" label="Password" onChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        { isSignup && <Input name="confirmPassword" label="Confirm Password" onChange={handleChange} type="password"/> }
                    </Grid>
                    <GoogleLogin
                        size='large'
                        theme='filled_blue'
                        width={width}
                        text='continue_with'
                        logo_alignment='left'
                        onSuccess={GoogleSuccess}
                        onError={GoogleFailure}
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={styles.submit} ref={ref}>
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;