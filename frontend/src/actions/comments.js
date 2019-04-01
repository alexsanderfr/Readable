import { get, getByParent, add, vote, disableByParent, disable, edit } from '..../api-server/comments'
import { token } from '../utils/helpers'

export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const RECEIVE_COMMENTS_BY_PARENT = "RECEIVE_COMMENTS_BY_PARENT"
export const ADD_COMMENT = "ADD_COMMENT"
export const VOTE_COMMENT = "VOTE_COMMENT"
export const DISABLE_COMMENT = "DISABLE_COMMENT"
export const DISABLE_COMMENT_BY_PARENT = "DISABLE_COMMENT_BY_PARENT"
export const EDIT_COMMENT = "EDIT_COMMENT"

export function receiveComment(comment) {
    return {
        type: RECEIVE_COMMENT,
        comment,
    }
}

export function handleReceiveComment(id) {
    return (dispatch) => {
        return get(token, id)
            .then((comment) => {
                dispatch(receiveComment(comment))
            })
    }
}

export function receiveCommentsByParent(comments) {
    return {
        type: RECEIVE_COMMENTS_BY_PARENT,
        comments,
    }
}

export function handleReceiveCommentsByParent(parentId) {
    return (dispatch) => {
        return getByParent(token, parentId)
            .then((comments) => {
                dispatch(receiveComment(comments))
            })
    }
}

export function addComment(comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export function handleAddComment(comment) {
    return (dispatch) => {
        return add(token, comment)
            .then((comment) => dispatch(addComment(comment)))
    }
}

export function voteComment(comment) {
    return {
        type: VOTE_COMMENT,
        comment
    }
}

export function handleVoteComment(id, option) {
    return (dispatch) => {
        return vote(token, id, option)
            .then((comment) => dispatch(voteComment(comment)))
    }
}

export function disableComment(comment) {
    return {
        type: DISABLE_COMMENT,
        comment
    }
}

export function handleDisableComment(id) {
    return (dispatch) => {
        return disable(token, id)
            .then((comment) => dispatch(disableComment(comment)))
    }
}

export function disableCommentByParent(post) {
    return {
        type: DISABLE_COMMENT_BY_PARENT,
        post
    }
}

export function handleDisableCommentByParent(post) {
    return (dispatch) => {
        return disableByParent(token, post)
            .then((post) => dispatch(disableCommentByParent(post)))
    }
}

export function editComment(comment) {
    return {
        type: EDIT_COMMENT,
        comment
    }
}

export function handleEditComment(id, comment) {
    return (dispatch) => {
        return edit(token, id, comment)
            .then((comment) => dispatch(editComment(comment)))
    }
}