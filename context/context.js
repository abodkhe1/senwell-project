import { createContext } from "react";

const TodoContext = createContext({
    todos: [
        { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
    ],
    getData: () => { },
})


const useTodo = () => {
    return useContext(TodoContext)
}

const TodoProvider = TodoContext.Provider;

export default { TodoContext, TodoProvider, useTodo }