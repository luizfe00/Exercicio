import { GET_BOOKS, ADD_BOOK, BOOKS_LOADING, DEL_BOOK } from './types'
import axios from 'axios'
import { returnErrors } from './errorActions'
import { header } from './header'

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
        .post('/api/books', book, header)
        .then(res => dispatch({
            type: ADD_BOOK,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const delBook = id => dispatch => {
    axios
        .delete(`/api/books/${id}`, header)
        .then(res => dispatch({
            type: DEL_BOOK,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const setBooksLoading = () => {
    return {
        type: BOOKS_LOADING
    }
}