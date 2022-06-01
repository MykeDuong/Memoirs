import React, { useState, useEffect } from 'react';
import { Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { css, jsx } from "@emotion/react"

import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import { getPosts } from './../../actions/posts';

const Home = () => {

    const dispatch = useDispatch();

    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
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
    );
}

export default Home;