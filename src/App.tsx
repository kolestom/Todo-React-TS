import Todos from "./comps/Todos";
import NewTodo from "./comps/NewTodo";
import TodosContextProvider from "./context/todos-context";

function App() {
    

    return (
        <TodosContextProvider>
            <NewTodo />
            <Todos />
        </TodosContextProvider>
    );
}

export default App;
