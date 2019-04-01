import { getAll } from '..../api-server/categories'
import { token } from '../utils/helpers'

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"

export function receiveCategories(categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}

export function handleReceiveCategories() {
    return (dispatch) => {
        return getAll(token)
            .then(({ categories }) => {
                dispatch(receiveCategories(categories))
            })
    }
}