import { combineReducers } from "redux";
import authReducer from './auth'
import currentUserReducer from './currentUser'
import usersReducer from './users'
import questionsReducer from './facebookpost'

export default combineReducers({
    authReducer, currentUserReducer, usersReducer, questionsReducer
})