import Todo from "../models/todoModel";
import classes from "./Todo.module.css";

type ToDoListProps ={
    item: Todo;
    onRemoveTodo: (id: string) => void;
}
const TodoList: React.FC<ToDoListProps> = ({ item, onRemoveTodo }) => {
    return (
        <li className={classes.item} onClick={() => onRemoveTodo(item.id)}>
            {item.text}
        </li>
    );
};

export default TodoList;
