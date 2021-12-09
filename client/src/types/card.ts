// export interface ICardBook {
//     author: string,
//     title: string,
//     content: string,
//     publication_date: string,
//     picture: string,
//     _id: string
// }

export interface CardState {
    cards: any[],
    one_card: any,
    created_card: any,
    deleted: boolean,
    error: null | string
}

export enum CardActionTypes {
    FETCH_CARDS = 'FETCH_CARDS',
    FETCH_ONE_BOOK = 'FETCH_ONE_BOOK',
    FETCH_ERROR = 'FETCH_ERROR',
    FETCH_CREATED = 'FETCH_CREATED',
    FETCH_DELETED = 'FETCH_DELETED'
}

interface FetchCardAction {
    type: CardActionTypes.FETCH_CARDS
    payload: any[]
}

interface FetchOneBookAction {
    type: CardActionTypes.FETCH_ONE_BOOK
    payload: any[]
}

interface FetchCreatedCardAction {
    type: CardActionTypes.FETCH_CREATED
    payload: any[]
}

interface FetchCardErrorAction {
    type: CardActionTypes.FETCH_ERROR
    payload: null | string
}

interface FetchCardDeletedAction {
    type: CardActionTypes.FETCH_DELETED
    payload: boolean
}

export type CardAction = FetchCardAction | FetchCardErrorAction | FetchOneBookAction | FetchCreatedCardAction | FetchCardDeletedAction