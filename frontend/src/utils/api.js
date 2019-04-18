import { token } from '../utils/helpers'

const api = "http://localhost:3001";

const headers = {
    Accept: "application/json",
    Authorization: token,
    "Content-Type": "application/json"
};

export const getCategories = () =>
    fetch(`${api}/categories`, { headers })
        .then(res => res.json());

export const getPostsByCategory = (category) =>
    fetch(`${api}/${category}/posts`, { headers })
        .then(res => res.json())
        .then(data => data.json());

export const getPosts = () =>
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())

export const addPost = (post) =>
    fetch(`${api}/posts`, {
        method: "POST",
        headers,
        body: JSON.stringify(post)
    }).then(res => res.json())

export const getPost = (id) =>
    fetch(`${api}/posts/${id}`, { headers })
        .then(res => res.json())

export const votePost = (id, option) =>
    fetch(`${api}/posts/${id}`, {
        method: "POST",
        headers,
        body: JSON.stringify({option})
    }).then(res => res.json())

export const editPost = (id, post) =>
    fetch(`${api}/posts/${id}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(post)
    }).then(res => res.json())
    .then(data => data)

export const disablePost = (id) =>
    fetch(`${api}/posts/${id}`, {
        method: "DELETE",
        headers
    }).then(res => res.json())

export const getCommentsByParent = (postId) =>
    fetch(`${api}/posts/${postId}/comments`, { headers })
        .then(res => res.json())

export const addComment = (comment) =>
    fetch(`${api}/comments`, {
        method: "POST",
        headers,
        body: JSON.stringify(comment)
    }).then(res => res.json());

export const getComment = (id) =>
    fetch(`${api}/comments/${id}`, { headers })
        .then(res => res.json())
        .then(data => data.json());

export const voteComment = (id, option) =>
    fetch(`${api}/comments/${id}`, {
        method: "POST",
        headers,
        body: JSON.stringify({option})
    }).then(res => res.json());

export const editComment = (id, comment) =>
    fetch(`${api}/comments/${id}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(comment)
    }).then(res => res.json());

export const disableComment = (id) =>
    fetch(`${api}/comments/${id}`, {
        method: "DELETE",
        headers
    }).then(res => res.json());
