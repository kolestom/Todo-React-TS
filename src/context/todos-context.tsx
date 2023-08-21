import { createContext,useState } from "react";
import TodoModel from "../models/todoModel";

const TodosContext = createContext<{
    items: TodoModel[];
    addTodo: () => void;
    removeTodo: (id: string) => void
}>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) =>{}
})

const TodoContextProvider: React.FC = (props) => {
    return ( 
        <>
        </>
        // <TodosContext.Provider>
        //     {props.children}
        // </TodosContext.Provider>
     );
}
 
