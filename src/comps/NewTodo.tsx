import { useRef } from "react"
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{onAddTodo: (text:string) => void}> = ({onAddTodo}) => {
    
    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (e: React.FormEvent) =>{
        e.preventDefault()
        const enteredText = todoTextInputRef.current!.value
        if (!enteredText.trim().length) return
        onAddTodo(enteredText)
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