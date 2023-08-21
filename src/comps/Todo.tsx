import Todo from "../models/todoModel";
import classes from './Todo.module.css'

const TodoList: React.FC<{item: Todo, onRemoveTodo: ()=>void}> = ({item, onRemoveTodo}) => {
    return ( 
        <li className={classes.item} onClick={onRemoveTodo}>{item.text}</li>
     );
}
 
export default TodoList;