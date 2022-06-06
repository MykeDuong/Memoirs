import React, { useState, useEffect } from "react";
import { Container } from '@mui/material';

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Auth from './Auth/Auth';

import styles from './styles';
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
    return (
        <BrowserRouter>
          <GoogleOAuthProvider clientId="276004399616-r5mhe885s5qd2drd0juiqd4hjh2c8eea.apps.googleusercontent.com">
            <Container maxWidth="lg">
                <NavBar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/auth" exact element={<Auth />} />
                </Routes>
            </Container>
          </GoogleOAuthProvider>;
        </BrowserRouter>
    );
}

export default App;