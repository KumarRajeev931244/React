// step2 : making slice

import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[{id:1, text: "hello world"}]
}

// making slice



export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),   // nanoid give unique od
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            // state contain current state whereas action contain jo bhi data pass ho raha hai.
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

// how to export functionality of reducers.
// we have to export the functionality.

export const {addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer

/**
 * 1) configure the store
 * 2) we have to make inital state
 * 3) we have to createSlice which contain the name, initial state and reducers.
 * 4) we export todoslice using action.
 * 
 */
