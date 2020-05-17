import {createStore} from 'redux'
import userReducer from './../reducer/user_reducer.js'

export const store =createStore(userReducer)