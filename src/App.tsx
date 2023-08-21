import { useState } from "react";
import Todos from "./comps/Todos";
import TodoModel from "./models/todoModel";
import NewTodo from "./comps/NewTodo";
// import "./App.css";

function App() {
    
    const [todos, setTodos] = useState<TodoModel[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo: TodoModel  = {text: todoText, id: new Date().toISOString()}

        setTodos(prevTodos => {
          // return [newTodo, ...prevTodos]
          return prevTodos.concat(newTodo)
        })
    };

    const removeTodoHandler = (todoId: string) =>{
        // const newArray = todos.filter(todo => todo.id !== todoId)
        // setTodos(newArray)
        setTodos(prevArray => {return prevArray.filter(todo => todo.id !== todoId)} )
    }

    return (
        <>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
        </>
    );
}

export default App;
