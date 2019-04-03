import {
    RECEIVE_COMMENT, RECEIVE_COMMENTS_BY_PARENT, ADD_COMMENT, VOTE_COMMENT,
    DISABLE_COMMENT, DISABLE_COMMENT_BY_PARENT, EDIT_COMMENT
} from '../actions/comments'

export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_COMMENT:
            return {
                ...state,
                ...action.comment
            }
        case RECEIVE_COMMENTS_BY_PARENT:
            return {
                ...state,
                ...action.comments
            }
        case ADD_COMMENT:
            return {
                ...state,
                [action.comment.id]: action.comment
            }
        case VOTE_COMMENT:
            return {
                ...state,
                [action.comment.id]: action.comment
            }
        case DISABLE_COMMENT:
            return {
                ...state,
                [action.comment.id]: action.comment
            }
        case DISABLE_COMMENT_BY_PARENT:
            return {
                ...state,
                [action.post.id]: action.post
            }
        case EDIT_COMMENT:
            return {
                ...state,
                [action.comment.id]: action.comment
            }
        default:
            return state
    }
}