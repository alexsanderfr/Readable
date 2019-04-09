import {
    RECEIVE_POSTS, RECEIVE_POST, RECEIVE_POSTS_BY_CATEGORY, ADD_POST,
    VOTE_POST, DISABLE_POST, EDIT_POST
} from '../actions/posts'

export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return {
                ...state,
                ...action.posts
            }
        case RECEIVE_POST:
            return {
                ...state,
                ...action.post
            }
        case RECEIVE_POSTS_BY_CATEGORY:
            return {
                ...state,
                ...action.posts
            }
        case ADD_POST:
            return {
                ...state,
                [action.post.id]: action.post
            }
        case VOTE_POST:
            return {
                ...state,
                [action.post.id]: action.post
            }
        case DISABLE_POST:
            return {
                ...state,
                [action.post.id]: action.post
            }
        case EDIT_POST:
            return {
                ...state,
                [action.post.id]: action.post
            }
        default:
            return state
    }
}