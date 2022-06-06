import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Auth from './Auth/Auth';
import PostDetails from './PostDetails/PostDetails';

import styles from './styles';
import './styles.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


const App = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
      function checkUserData() {
        setUser(localStorage.getItem('profile'));
      }
    
      window.addEventListener('storage', checkUserData)
    
      return () => {
        window.removeEventListener('storage', checkUserData)
      }
    }, []);

    return (
        <BrowserRouter>
          <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
            <Container maxWidth="xl">
                <NavBar />
                <Routes>
                    <Route path="/" element={ <Navigate to="/posts" />} />
                    <Route path="/posts" element={<Home />} />
                    <Route path="/posts/search" element={<Home />} />
                    <Route path="/posts/:id" element={<PostDetails />} />
                    <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/posts" />} />
                </Routes>
            </Container>
          </GoogleOAuthProvider>
        </BrowserRouter>
    );
}

export default App;