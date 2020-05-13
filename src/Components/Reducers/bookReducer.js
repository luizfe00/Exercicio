import { GET_BOOKS, ADD_BOOK } from '../Actions/types'

const initialState = {
    books: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case ADD_BOOK:
            return {
                ...state,
                book: [action.payload, ...state.books]
            }
        default:
            return state
    }
}