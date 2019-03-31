import { getAll } from '..../api-server/categories'
const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"

export function receiveCategories (categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}

export function handleReceiveCategories() {
    return (dispatch) => {
        return getAll()
        .then(({categories}) => {
            dispatch(receiveCategories(categories))
        })
    }
}