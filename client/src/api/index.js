import axios from 'axios';

const urlPost = 'http://localhost:5000/posts';
const urlAuth = 'http://localhost:5000/auth'

export const fetchPosts = () => axios.get(urlPost);
export const createPost = (newPost) => axios.post(urlPost, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${urlPost}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${urlPost}/${id}`);
export const likePost = (id) => axios.patch(`${urlPost}/${id}/likePost`);

export const regAuth = (userData) => axios.post(`${urlAuth}/register`, userData);
export const loginAuth = (userData) => axios.post(`${urlAuth}/login`, userData);

export const googleAuth = () => {
    window.open("http://localhost:5000/auth/google", '_self');
    axios.get(`${urlAuth}/google`);
};