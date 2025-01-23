import { createContext,useContext } from "react";


// here we createContext.
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            completed: false

        }
        
    ],
    // create context mae functionality mae function defination nahi likthe uske naam likhte hai.
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete:(id) => {}
})


//  here we useContext
export const useTodo = () => {
    return useContext(TodoContext)
}


// here we use provider
export const TodoProvider = TodoContext.Provider