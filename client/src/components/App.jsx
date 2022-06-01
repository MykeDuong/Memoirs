import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { css, jsx } from "@emotion/react"

import trails from './../images/trails.png';

import Form from './Form/Form';
import Posts from './Posts/Posts';

import { getPosts } from './../actions/posts';

import styles from './styles';
import './styles.css';

const App = () => {
    const dispatch = useDispatch();

    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar sx={styles.appBar} position="static" color="inherit" >
                <Typography sx={styles.heading} variant="h2" align="center">
                    Memoirs
                </Typography>
                <img sx={styles.heading} src={trails} alt="trails" height="60" />
            </AppBar>
            <Grow in style={{paddingLeft: 20, paddingRight: 20}}>
                <Grid container sx={css`justify-content: space-between; @media (max-width: 900px) {flex-direction: column-reverse}`} alignItems="stretch" spacing={1}>
                    <Grid item xs={12} md={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Grow>
        </Container>
    );
}

export default App;