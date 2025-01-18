// step:1 => bring configure store 
// step:2 => we make reducer
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Features/Todo/todoSlice'

// it takes object
export const store = configureStore({
    reducer: todoReducer
})