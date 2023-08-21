import Todo from "../models/todoModel";
import classes from './Todo.module.css'

const TodoList: React.FC<{item: Todo, onRemoveTodo: (id: string)=>void}> = ({item, onRemoveTodo}) => {
    // const removeTodoHadler = (e: MouseEvent) =>{
    //     onRemoveTodo(e.target.)
    // }
    return ( 
        <li className={classes.item} onClick={()=>onRemoveTodo(item.id)}>{item.text}</li>
     );
}
 
export default TodoList;