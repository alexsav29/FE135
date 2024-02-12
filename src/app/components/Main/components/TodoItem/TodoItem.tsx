import { Task } from "../../models/Task"

type TodoItemProps = {
    todo: Task;
    onDelete: (id: string) => void;
    onChange: (id: string, isDone: boolean) => void;
}

export const TodoItem = ({ todo, onDelete, onChange }: TodoItemProps) => {
    const { id, title, completed } = todo;

    const handleDeleteClick = () => {
        onDelete(id);
    };

    const handleChange = (event: any) => {
        onChange(id, event.target.checked);
    };

    return  <li key={id}>
                <input onChange={(event) => {handleChange(event)}} type="checkbox" defaultChecked={completed} />
                <span>{title}</span>
                <button onClick={handleDeleteClick}>delete</button>
            </li>
}