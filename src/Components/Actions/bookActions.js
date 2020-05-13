import { GET_BOOKS, ADD_BOOK, BOOKS_LOADING } from './types'
import axios from 'axios'
import { returnErrors } from './errorActions'
import { config } from './authActions'

export const getBooks = () => dispatch => {
    dispatch(setBooksLoading())
    axios.get('/api/books')
        .then(res => dispatch({
            type: GET_BOOKS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addBook = book => dispatch => {
    axios
        .post('/api/books', book, config)
        .then(res => dispatch({
            type: ADD_BOOK,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const setBooksLoading = () => {
    return {
        type: BOOKS_LOADING
    }
}