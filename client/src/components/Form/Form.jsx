/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useState, useEffect } from "react";
import FileBase from 'react-file-base64';
import { css, jsx } from "@emotion/react"
import { TextField, Button, Typography, Paper} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { createPost, updatePost } from '../../actions/posts';

import useStyles from './styles';
import './styles.css'

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });

    const post = useSelector((state) => {
        const chosen = currentId ? state.posts.find((p) => p._id === currentId) : null;
        console.log(currentId, chosen);
        return chosen;
    });
    
    const styles = useStyles;
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData))
        }
    };

    const clear = () => {

    };

    return (
        <Paper sx={styles.paper}>
            <form className="form" autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memoir</Typography>
                <TextField sx={styles.field} name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})} />
                <TextField sx={styles.field} name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} />
                <TextField sx={styles.field} name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} />
                <TextField sx={styles.field} name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})} />
                <div className="fileInput" >
                    <FileBase type="file" multiple={false} onDone={(base64) => { setPostData({...postData, selectedFile: base64.base64})}}/>
                </div>
                <Button sx={styles.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button sx={styles.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;