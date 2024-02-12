import { useContext } from "react"
import { TodoCountContext } from "../../context/TodoCountContext"

export const Header = () => {
    const context = useContext(TodoCountContext);
    const count = context?.countTodo;

    return <header className="header">
        <h2>Task in progress: {count}</h2>
        </header>
}

// Контекст - объект, внутрь которого мы передали свойства и методы.
// useContext - хук, который позволяет из созданного контекста забрать данные.