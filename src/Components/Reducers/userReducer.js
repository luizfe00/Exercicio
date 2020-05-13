import { GET_USERS, ADD_USER } from '../Actions/types'

const initialState = {
    users: [],
    user: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case ADD_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}