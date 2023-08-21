import { useRef, useContext } from "react"
import classes from './NewTodo.module.css'
import { TodosContext } from "../context/todos-context"

const NewTodo: React.FC = () => {

    const todosCtxt = useContext(TodosContext)
    
    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (e: React.FormEvent) =>{
        e.preventDefault()
        const enteredText = todoTextInputRef.current!.value
        if (!enteredText.trim().length) return
        todosCtxt.addTodo(enteredText)
    }

    return ( 
        <form className={classes.form} action="" onSubmit={submitHandler}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id='text' ref={todoTextInputRef}/>
            <button type="submit">Add Todo</button>
        </form>
     );
}
 
export default NewTodo;