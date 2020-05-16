import { GET_USERS, ADD_USER, USERS_LOADING, DEL_USER } from '../Actions/types'

const initialState = {
    users: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case USERS_LOADING:
            return {
                ...state,
                loading: true
            }
        case DEL_USER:
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.payload)
            }
        default:
            return state
    }
}