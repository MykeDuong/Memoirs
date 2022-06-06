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

    const user = JSON.parse(localStorage.getItem('profile')); // TODO: listen for changes
    return (
        <BrowserRouter>
          <GoogleOAuthProvider clientId="276004399616-r5mhe885s5qd2drd0juiqd4hjh2c8eea.apps.googleusercontent.com">
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
          </GoogleOAuthProvider>;
        </BrowserRouter>
    );
}

export default App;