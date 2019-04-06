import { getCategories } from '../utils/api'

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"

export function receiveCategoriesAction(categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}

export function handleReceiveCategories() {
    return (dispatch) => {
        return getCategories()
            .then(({ categories }) => {
                dispatch(receiveCategoriesAction(categories))
            })
    }
}