import { get, getAll, getByCategory, add, vote, disable, edit, incrementCommentCounter } from '..../api-server/posts'
import { token } from '../utils/helpers'

export const RECEIVE_POST = "RECEIVE_POST"
export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const RECEIVE_POSTS_BY_CATEGORY = "RECEIVE_POSTS_BY_CATEGORY"
export const ADD_POST = "ADD_POST"
export const VOTE_POST = "VOTE_POST"
export const DISABLE_POST = "DISABLE_POST"
export const EDIT_POST = "EDIT_POST"
export const INCREMENT_POST_COMMENT_COUNTER = "INCREMENT_POST_COMMENT_COUNTER"

export function receivePost(post) {
    return {
        type: RECEIVE_POST,
        post,
    }
}

export function handleReceivePost(id) {
    return (dispatch) => {
        return get(token, id)
            .then((post) => {
                dispatch(receivePost(post))
            })
    }
}

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts,
    }
}

export function handleReceivePosts() {
    return (dispatch) => {
        return getAll(token)
            .then((posts) => {
                dispatch(receivePosts(posts))
            })
    }
}

export function receivePostsByCategory(posts) {
    return {
        type: RECEIVE_POSTS_BY_CATEGORY,
        posts,
    }
}

export function handleReceivePostsByCategory(category) {
    return (dispatch) => {
        return getByCategory(token, category)
            .then((posts) => {
                dispatch(receivePostsByCategory(posts))
            })
    }
}

export function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}

export function handleAddPost(post) {
    return (dispatch) => {
        return add(token, post)
            .then((post) => dispatch(addPost(post)))
    }
}

export function votePost(post) {
    return {
        type: VOTE_POST,
        post
    }
}

export function handleVotePost(id, option) {
    return (dispatch) => {
        return vote(token, id, option)
            .then((post) => dispatch(votePost(post)))
    }
}

export function disablePost(post) {
    return {
        type: DISABLE_POST,
        post
    }
}

export function handleDisableComment(id) {
    return (dispatch) => {
        return disable(token, id)
            .then((post) => dispatch(disablePost(post)))
    }
}

export function editPost(post) {
    return {
        type: EDIT_POST,
        post
    }
}

export function handleEditComment(id, comment) {
    return (dispatch) => {
        return edit(token, id, comment)
            .then((post) => dispatch(editPost(post)))
    }
}

export function incrementPostCommentCounter(id, count) {
    return {
        type: INCREMENT_POST_COMMENT_COUNTER,
        id,
        count
    }
}

export function handleIncrementPostCommentCounter(id, count) {
    return (dispatch) => {
        return edit(token, id, count)
            .then(() => dispatch(incrementPostCommentCounter(id, count)))
    }
}