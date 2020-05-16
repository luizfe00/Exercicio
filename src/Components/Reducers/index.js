import { combineReducers } from 'redux'
import userReducer from './userReducer'
import errorReducer from './errorReducer'
import bookReducer from './bookReducer'


export default combineReducers({
    users: userReducer,
    books: bookReducer,
    error: errorReducer,
})