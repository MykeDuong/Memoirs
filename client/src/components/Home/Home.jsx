import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, Chip } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { css, jsx } from "@emotion/react"

import Pagination from '../Pagination';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import ChipInput from './ChipInput';

import { getPosts, getPostsBySearch } from './../../actions/posts';
import styles from './styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            //search post
        }
    }

    const searchPost = () => {
        if (search.trim() || tags.length !== 0) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags}`);
        } else {
            navigate('/');
        }
    }

    return (
        <Grow in style={{paddingLeft: 20, paddingRight: 20}}>
            <Container maxWidth="xl">
                <Grid container sx={styles.gridContainer} alignItems="stretch" spacing={1}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar sx={styles.appBarSearch} position="static" color="inherit">
                            <TextField sx={styles.searchBox} name="search" variant="outlined" label="Search Memoirs" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown}/>
                            <ChipInput sx={styles.searchBox} tags={tags} setTags={setTags}/>
                            <Button sx={styles.searchBox} onClick={searchPost} sx={styles.searchButton} variant="contained" color="primary">Search</Button>
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        {(!searchQuery && !tags.length) && (
                            <Paper sx={styles.pagination} elevation={6}>
                                <Pagination page={page} />
                            </Paper>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home;