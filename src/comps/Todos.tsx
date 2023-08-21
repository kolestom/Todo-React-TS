import Todo from "./Todo";
import classes from "./Todos.module.css";
import { useContext } from "react";
import { TodosContext } from "../context/todos-context";

const Todos: React.FC = () => {
    const todosCtxt = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todosCtxt.items.map((item) => (
                <Todo
                    key={item.id}
                    item={item}
                    onRemoveTodo={todosCtxt.removeTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    );
};

export default Todos;
