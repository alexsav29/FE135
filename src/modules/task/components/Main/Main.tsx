import { useContext, useEffect, useState } from "react";
import { TodoItem } from "./components/TodoItem";
import { Task, TaskDto } from "./models/Task";
import { v4 as uuidv4 } from 'uuid';
import { TodoHeader } from "./components/TodoHeader";
import { todoDataMapper } from "./utils/mapper";
import { TodoCountContext } from "../../../../app/context/TodoCountContext";
import { getTaskInProgress } from "./utils/helper";
import './Main.css'

export const Main = () => {
    
    const [data, setData] = useState<Task[]>([]);

    const context = useContext(TodoCountContext);
    const handleCountChange = context!.onChangeCountTodo;

    const handleChangeLoading = context!.onChangeLoading;
    const loading = context?.isLoading;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').
        then((response) => response.json()).
        then((serverData: TaskDto[]) => {
            const currentData = todoDataMapper(serverData);
            setData(currentData);
            // handleCountChange(getTaskInProgress(currentData));
    })}, []);

    useEffect(() => {
        if (data.length !== 0 && loading) {
        handleChangeLoading(false);
        };
    }, [data, loading]);

    useEffect(() => {
        handleCountChange(getTaskInProgress(data));
    }, [data]);

    const handleAddTodo = (inputValue: string) => {
        
        setData([...data, {
            userId: uuidv4(),
            id: uuidv4(),
            title: inputValue,
            completed: false
        }]);
    };

    const handleDelete = (idTodo: string) => {
        const filterData = data.filter(({id}) => id !== idTodo);

        setData(filterData);
    };

    const handleChangeTodo = (id: string, isDone: boolean) => {
        const mapData = data.map((todo) => {
            if (todo.id === id) {
                todo.completed = isDone;
            };
            return todo;
        });
        
        setData(mapData);   
    };

    if (loading) {
        return <h1>Loading...</h1>
    }
      
    return  <main className="main">
                <TodoHeader onAddTodo={handleAddTodo} />
                
                {data.length !== 0 ?
                    <ul>
                        {data.map((todo) => <TodoItem 
                                                key={uuidv4()} 
                                                todo={todo} 
                                                onDelete={handleDelete} 
                                                handleChangeTodo={handleChangeTodo}
                                            />)}
                    </ul> :
                    <h2>Список дел пуст</h2>    
                }
            </main>
      
}