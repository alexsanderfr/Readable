import {
    RECEIVE_POSTS, RECEIVE_POST, RECEIVE_POSTS_BY_CATEGORY, ADD_POST,
    VOTE_POST, DISABLE_POST, EDIT_POST
} from '../actions/posts'
import {
    ADD_COMMENT, DISABLE_COMMENT
} from '../actions/comments'

export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            let postsObject = {}
            action.posts.forEach(element => {
                postsObject[element.id] = element
            })
            return {
                ...state,
                ...postsObject
            }
        case RECEIVE_POST:
            return {
                ...state,
                [action.post.id]: action.post
            }
        case RECEIVE_POSTS_BY_CATEGORY:
            let postsByCategoryObject = {}
            action.posts.forEach(element => {
                postsByCategoryObject[element.id] = element
            })
            return {
                ...state,
                ...postsByCategoryObject
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
        case ADD_COMMENT:
            return {
                ...state,
                [action.comment.parentId]: {
                    ...state[action.comment.parentId],
                    commentCount: state[action.comment.parentId].commentCount + 1
                }
            }
        case DISABLE_COMMENT:
            return {
                ...state,
                [action.comment.parentId]: {
                    ...state[action.comment.parentId],
                    commentCount: state[action.comment.parentId].commentCount - 1
                }
            }
        default:
            return state
    }
}