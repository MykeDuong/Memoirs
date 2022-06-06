import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../actions/posts';
import styles from './paginationStyles';
import './styles.css'

const Paginate = ({ page }) => {

    const { numberOfPages } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (page) dispatch(getPosts(page));
    }, [page])

    return (
        <Pagination
            count={numberOfPages}
            page={Number(page) || 1}
            variant="outlined"
            color="primary"
            renderItem={(item) =>  (
                <PaginationItem { ...item } component={Link} to={`?page=${item.page}`} />
            )}
        />
    )
}

export default Paginate;