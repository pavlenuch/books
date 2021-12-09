import { combineReducers } from "redux"
import { cardReducer  } from './cardReducer'

export const rootReducer = combineReducers({
    books: cardReducer
})

export type RootState = ReturnType<typeof rootReducer>