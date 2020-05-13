import { GET_USERS, ADD_USER, USERS_LOADING } from './types'
import axios from 'axios'
import { returnErrors } from './errorActions'
import { config } from './authActions'

export const getUsers = () => dispatch => {
    dispatch(setUsersLoading())
    axios.get('/api/users')
        .then(res => dispatch({
            type: GET_USERS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addUser = user => dispatch => {
    axios
        .post('/api/users', user, config)
        .then(res => dispatch({
            type: ADD_USER,
            payload: res.data
        }))
        .catch(err => dispatch(console.log(err), returnErrors(err.response.data, err.response.status)))
}

export const setUsersLoading = () => {
    return {
        type: USERS_LOADING
    }
}