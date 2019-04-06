import { getComment, getCommentsByParent, addComment, voteComment,
    disableComment, editComment } from '../utils/api'

export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const RECEIVE_COMMENTS_BY_PARENT = "RECEIVE_COMMENTS_BY_PARENT"
export const ADD_COMMENT = "ADD_COMMENT"
export const VOTE_COMMENT = "VOTE_COMMENT"
export const DISABLE_COMMENT = "DISABLE_COMMENT"
export const EDIT_COMMENT = "EDIT_COMMENT"

export function receiveCommentAction(comment) {
    return {
        type: RECEIVE_COMMENT,
        comment,
    }
}

export function handleReceiveComment(id) {
    return (dispatch) => {
        return getComment(id)
            .then((comment) => {
                dispatch(receiveCommentAction(comment))
            })
    }
}

export function receiveCommentsByParentAction(comments) {
    return {
        type: RECEIVE_COMMENTS_BY_PARENT,
        comments,
    }
}

export function handleReceiveCommentsByParent(parentId) {
    return (dispatch) => {
        return getCommentsByParent(parentId)
            .then((comments) => {
                dispatch(receiveCommentAction(comments))
            })
    }
}

export function addCommentAction(comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export function handleAddComment(comment) {
    return (dispatch) => {
        return addComment(comment)
            .then((comment) => dispatch(addCommentAction(comment)))
    }
}

export function voteCommentAction(comment) {
    return {
        type: VOTE_COMMENT,
        comment
    }
}

export function handleVoteComment(id, option) {
    return (dispatch) => {
        return voteComment(id, option)
            .then((comment) => dispatch(voteCommentAction(comment)))
    }
}

export function disableCommentAction(comment) {
    return {
        type: DISABLE_COMMENT,
        comment
    }
}

export function handleDisableComment(id) {
    return (dispatch) => {
        return disableComment(id)
            .then((comment) => dispatch(disableCommentAction(comment)))
    }
}

export function editCommentAction(comment) {
    return {
        type: EDIT_COMMENT,
        comment
    }
}

export function handleEditComment(id, comment) {
    return (dispatch) => {
        return editComment(id, comment)
            .then((comment) => dispatch(editCommentAction(comment)))
    }
}