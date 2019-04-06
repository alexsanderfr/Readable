import { getPost, getPosts, getPostsByCategory, addPost, votePost, disablePost, 
    editPost } from '../utils/api'

export const RECEIVE_POST = "RECEIVE_POST"
export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const RECEIVE_POSTS_BY_CATEGORY = "RECEIVE_POSTS_BY_CATEGORY"
export const ADD_POST = "ADD_POST"
export const VOTE_POST = "VOTE_POST"
export const DISABLE_POST = "DISABLE_POST"
export const EDIT_POST = "EDIT_POST"

export function receivePostAction(post) {
    return {
        type: RECEIVE_POST,
        post,
    }
}

export function handleReceivePost(id) {
    return (dispatch) => {
        return getPost(id)
            .then((post) => {
                dispatch(receivePostAction(post))
            })
    }
}

export function receivePostsAction(posts) {
    return {
        type: RECEIVE_POSTS,
        posts,
    }
}

export function handleReceivePosts() {
    return (dispatch) => {
        return getPosts()
            .then((posts) => {
                dispatch(receivePostsAction(posts))
            })
    }
}

export function receivePostsByCategoryAction(posts) {
    return {
        type: RECEIVE_POSTS_BY_CATEGORY,
        posts,
    }
}

export function handleReceivePostsByCategory(category) {
    return (dispatch) => {
        return getPostsByCategory(category)
            .then((posts) => {
                dispatch(receivePostsByCategoryAction(posts))
            })
    }
}

export function addPostAction(post) {
    return {
        type: ADD_POST,
        post
    }
}

export function handleAddPost(post) {
    return (dispatch) => {
        return addPost(post)
            .then((post) => dispatch(addPostAction(post)))
    }
}

export function votePostAction(post) {
    return {
        type: VOTE_POST,
        post
    }
}

export function handleVotePost(id, option) {
    return (dispatch) => {
        return votePost(id, option)
            .then((post) => dispatch(votePostAction(post)))
    }
}

export function disablePostAction(post) {
    return {
        type: DISABLE_POST,
        post
    }
}

export function handleDisablePost(id) {
    return (dispatch) => {
        return disablePost(id)
            .then((post) => dispatch(disablePostAction(post)))
    }
}

export function editPostAction(post) {
    return {
        type: EDIT_POST,
        post
    }
}

export function handleEditPost(id, post) {
    return (dispatch) => {
        return editPost(id, post)
            .then((post) => dispatch(editPostAction(post)))
    }
}