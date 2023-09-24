import React, { useState } from "react";
import TodoModel from "../models/todoModel";

type TodoContextObject = {
    items: TodoModel[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void
}
export const TodosContext = React.createContext<TodoContextObject>({
    items: [],
    addTodo: () => {},
    removeTodo: () =>{}
})

const TodosContextProvider: React.FC<React.PropsWithChildren<object>> = ({children}) => {
    const [todos, setTodos] = useState<TodoModel[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo: TodoModel  = {text: todoText, id: new Date().toISOString()}
        setTodos(prevTodos => prevTodos.concat(newTodo))
    };

    const removeTodoHandler = (todoId: string) =>{
        setTodos(prevArray => prevArray.filter(todo => todo.id !== todoId) )
    }

    const contextValue: TodoContextObject = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }
    return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>    
    ;
}

export default TodosContextProvider
 
