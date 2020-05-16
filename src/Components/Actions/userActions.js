import { GET_USERS, ADD_USER, USERS_LOADING, DEL_USER } from './types'
import axios from 'axios'
import { returnErrors } from './errorActions'
import { header } from './header'

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
        .post('/api/users', user, header)
        .then(res => dispatch({
            type: ADD_USER,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const delUser = id => dispatch => {
    axios
        .delete(`api/users/${id}`, header)
        .then(res => dispatch({
            type: DEL_USER,
            payload: id
        }))
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const setUsersLoading = () => {
    return {
        type: USERS_LOADING
    }
}