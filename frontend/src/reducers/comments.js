import {
    RECEIVE_COMMENT, RECEIVE_COMMENTS_BY_PARENT, ADD_COMMENT, VOTE_COMMENT,
    DISABLE_COMMENT, EDIT_COMMENT
} from '../actions/comments'

export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_COMMENT:
            return {
                ...state,
                [action.comment.id]: action.comment
            }
        case RECEIVE_COMMENTS_BY_PARENT:
            let commentsObject = {}
            action.comments.forEach(element => {
                commentsObject[element.id] = element
            })
            return {
                ...state,
                ...commentsObject
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
        case EDIT_COMMENT:
            return {
                ...state,
                [action.comment.id]: action.comment
            }
        default:
            return state
    }
}