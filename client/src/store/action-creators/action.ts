import { CardAction, CardActionTypes } from '../../types/card'

export const resetOneBook = (): CardAction => {
    return {type: CardActionTypes.FETCH_ONE_BOOK, payload: []}
}

export const resetCreatesBook = (): CardAction => {
    return {type: CardActionTypes.FETCH_CREATED, payload: []}
}

export const resetDeletedBook = (): CardAction => {
    return {type: CardActionTypes.FETCH_DELETED, payload: false}
}

export const resetError = (): CardAction => {
    return {type: CardActionTypes.FETCH_ERROR, payload: null}
}