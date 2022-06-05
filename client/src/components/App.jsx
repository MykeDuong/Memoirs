import React, { useState, useEffect } from "react";
import { Container } from '@mui/material';

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Auth from './Auth/Auth';

import styles from './styles';
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = () => {
          fetch("http://localhost:5000/auth/login/success", {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true,
            },
          })
            .then((response) => {
              if (response.status === 200) return response.json();
              throw new Error("authentication has been failed!");
            })
            .then((resObject) => {
                setUser(resObject.user);
                localStorage.setItem('profile', resObject.user);
            })
            .catch((err) => {
              console.log(err);
            });
        };
        getUser();
      }, []);

    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <NavBar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/auth" exact element={<Auth />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;