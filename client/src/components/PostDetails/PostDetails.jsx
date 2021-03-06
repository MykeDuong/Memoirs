import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';

import CommentSection from './CommentSection';

import { getPost, getPostsBySearch } from '../../actions/posts';
import useStyles from './styles';
import './styles.css'


const PostDetails = () => {
    const { post, posts, isLoading } = useSelector(state => state.posts);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const styles = useStyles;

    const { id } = useParams();
    
    useEffect(() => {
        dispatch(getPost(id));
    }, [id])

    useEffect(() => {
      if (post) {
        dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
      }
    }, [post])

    if (!post) return null;
    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

    const openPost = (_id) => navigate(`../../posts/${_id}`);

    if (isLoading) {
        return (
          <Paper elevation={6} sx={styles.loadingPaper} >
            <CircularProgress size="7em" />
          </Paper>
      )
    }


    return (
      <Paper style={{ padding: '20px', borderRadius: '15px '}} elevation={6}>
        <div className="card">
          <div className="section">
            <Typography variant="h3" component="h2">{post.title}</Typography>
            <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
            <Typography variant="h6">Created by: {post.name}</Typography>
            <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
            <Divider style={{ margin: '20px 0' }} />
            <CommentSection css={styles.commentSection} post={post} />
            <Divider style={{ margin: '20px 0' }} />
          </div>
          <div className="imageSection">
            <img className="media" src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </div>
        </div>
        {recommendedPosts.length !== 0 && (
          <div className="section">
            <Typography gutterBottom variant="h5">You might also like:</Typography>
            <Divider />
            <div className="recommendedPosts">
              {recommendedPosts.map(({ title, message, name, likes, selectedFile, _id }) => (
                <div className="recommendedPost" onClick={() => openPost(_id)} key={_id}>
                  <Typography gutterBottom variant="h6">{title}</Typography>
                  <Typography gutterBottom variant="subtitle2">{name}</Typography>
                  <Typography className="recommendedMessage" gutterBottom variant="subtitle2">{message}</Typography>
                  <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                  <div className="recommendedImageSection" >
                    <img className="media" src={selectedFile} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Paper>
    )
}

export default PostDetails