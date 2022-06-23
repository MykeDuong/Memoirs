import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined'
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';


import useStyles from './styles';
import './styles.css'

const Post = ({ post, setCurrentId }) => {
    const styles = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('profile'));
    const [likes, setLikes] = useState(post?.likes);
    const userId = (user?.result?.sub || user?.result?._id)

    const hasLikedPost = post.likes.find((like) => like === userId);

    const openPost = () => {
        navigate(`/posts/${post._id}`);
    }

    const handleLikeClick = async () => {
        dispatch(likePost(post._id));

        if (hasLikedPost) {
            setLikes(post.likes.filter((id) => id !== userId));
        } else {
            setLikes([ ...post.likes, userId ])
        }
    }

    const Likes = () => {
        if (likes.length > 0) {
            return likes.find((like) => like === userId)
                ? (
                    <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
                ) : (
                    <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }
    
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    return (
        <Card sx={styles.card} raised elevation={6}>
            <ButtonBase sx={styles.cardAction} onClick={openPost}>
                <CardMedia sx={styles.media} image={post.selectedFile} title={post.title} />
                <div className="overlay">
                    <Typography variant="h6">{post.name}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
                    <div className="overlay2">
                        <Button style={{color: "white"}} size="small" onClick={() => {setCurrentId(post._id)}}>
                            <MoreHorizIcon fontSize="default" />
                        </Button>
                    </div>
                )}
                <div className="details">
                    <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <Typography sx={styles.title} variant="h5" gutterBottom>{post.title}</Typography>
                <CardContent>
                    <Typography sx={styles.message} variant="body2" color="textSecondary" component="p">{post.message}</Typography>
                </CardContent>
            </ButtonBase>
            <CardActions sx={styles.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={handleLikeClick}>
                    <Likes />
                </Button>
                {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
                    <Button size="small" color="error" onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}

export default Post;