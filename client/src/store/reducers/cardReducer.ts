import { CardState, CardActionTypes, CardAction } from '../../types/card'

const initialState: CardState = {
    cards: [],
    one_card: [],
    created_card: [],
    deleted: false,
    error: null
}

export const cardReducer = ( state = initialState, action: CardAction): CardState => {
    switch(action.type) {
        case CardActionTypes.FETCH_CARDS:
            return { ...state, cards: action.payload}
        case CardActionTypes.FETCH_ONE_BOOK:
            return { ...state, one_card: action.payload}
        case CardActionTypes.FETCH_CREATED:
            return { ...state, created_card: action.payload}
        case CardActionTypes.FETCH_DELETED:
            return { ...state, deleted: action.payload}
        case CardActionTypes.FETCH_ERROR:
            return { ...state, error: action.payload}
        default: 
            return state
    }
}