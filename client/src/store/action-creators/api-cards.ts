import { Dispatch } from "react"
import axios from "axios"
import { CardAction, CardActionTypes } from '../../types/card'

export const fetchAllBooks = () => {
    return async (dispatch: Dispatch<CardAction>) => {
        try {
            const response = await axios.get('/api/books')
            if(response.status === 200 && response.data.length === 0)
            {
                dispatch({ type: CardActionTypes.FETCH_CARDS, payload: [0] })
            } else {
                dispatch({ type: CardActionTypes.FETCH_CARDS, payload: response.data })
            }
        } catch (e) {
            dispatch({ type: CardActionTypes.FETCH_ERROR, payload: 'Ошибка при загрузке списка книг!' })
        }
    }
}

export const fetchOneBook = (id: string) => {
    return async (dispatch: Dispatch<CardAction>) => {
        try {
            const response = await axios.get(`/api/cardbook/${id}`)       
            if(response.data === null) {
                dispatch({ type: CardActionTypes.FETCH_ERROR, payload: 'Ошибка при получении данных книги!' })
            } else {
                dispatch({ type: CardActionTypes.FETCH_ONE_BOOK, payload: response.data })
                dispatch({ type: CardActionTypes.FETCH_ERROR, payload: null })
            }
        } catch (e) {
            dispatch({ type: CardActionTypes.FETCH_ERROR, payload: 'Ошибка при получении данных книги!' })
        }
    }
}

export const fetchCreateBook = (data: any) => {    
    return async (dispatch: Dispatch<CardAction>) => {
        try {
            const response = await axios({
                method: 'post',
                url: `/api/create`,
                data: data
            });
            setTimeout(() => {
                dispatch({ type: CardActionTypes.FETCH_CREATED, payload: response.data })
            }, 1000);
        } catch (e) {
            dispatch({ type: CardActionTypes.FETCH_ERROR, payload: 'Ошибка при получении данных книги!' })
        }
    }
}

export const fetchEditBook = (data: any) => {
    return async (dispatch: Dispatch<CardAction>) => {
        try {
            const response = await axios({
                method: 'put',
                url: `/api/editbook`,
                data: data
            });
            dispatch({ type: CardActionTypes.FETCH_ONE_BOOK, payload: [] })
            setTimeout(() => {
                dispatch({ type: CardActionTypes.FETCH_CREATED, payload: response.data })
            }, 1000);
        } catch (e) {
            dispatch({ type: CardActionTypes.FETCH_ERROR, payload: 'Ошибка при получении данных книги!' })
        }
    }
}

export const fetchDeleteBook = (id: string) => {
    return async (dispatch: Dispatch<CardAction>) => {
        try {
            await axios.delete(`/api/book/${id}`)
            setTimeout(() => {
                dispatch({ type: CardActionTypes.FETCH_DELETED, payload: true })
            }, 1000);
        } catch (e) {
            dispatch({ type: CardActionTypes.FETCH_ERROR, payload: 'Ошибка при получении данных книги!' })
        }
    }
}