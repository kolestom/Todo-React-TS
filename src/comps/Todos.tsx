import Todo from "./Todo";
import TodoModel from "../models/todoModel";
import classes from './Todos.module.css'

const Todos: React.FC<{items: TodoModel[], onRemoveTodo: (id: string)=>void}> = ({items, onRemoveTodo}) => {
    return ( 
        <ul className={classes.todos}>
            {items.map(item => <Todo key={item.id} item={item} onRemoveTodo={onRemoveTodo}/>)}
        </ul>
     );
}
 
export default Todos;