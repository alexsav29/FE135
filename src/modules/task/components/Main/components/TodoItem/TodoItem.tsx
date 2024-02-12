import { Task } from "../../models/Task"
import './TodoItem.css'

type TodoItemProps = {
    todo: Task;
    onDelete: (id: string) => void;
    handleChangeTodo: (id: string, isDone: boolean) => void;
}

export const TodoItem = ({ todo, onDelete, handleChangeTodo }: TodoItemProps) => {
    const { id, title, completed } = todo;

    const handleDeleteClick = () => {
        onDelete(id);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleChangeTodo(id, event.target.checked);
    };

    return  <li key={id}>
                <input onChange={(event) => {handleChange(event)}} type="checkbox" defaultChecked={completed} />
                <span>{title}</span>
                <button onClick={handleDeleteClick}>delete</button>
            </li>
}