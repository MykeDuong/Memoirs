import React from "react";
import { Container } from '@mui/material';

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Auth from './Auth/Auth';

import styles from './styles';
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
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