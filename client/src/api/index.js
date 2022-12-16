import axios from "axios";

const url = "http://localhost:5000/posts";

export const getPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const update = (id, updatePost) =>
  axios.patch(`${url}/${id}`, updatePost);

export const deletePos = (id) => axios.delete(`${url}/${id}`);

export const likePos = (id) => axios.patch(`${url}/${id}/likePost`);
