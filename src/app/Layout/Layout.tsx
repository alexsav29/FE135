import { NavLink, Outlet } from "react-router-dom"
import { TodoCountContext } from "../context/TodoCountContext";
import { useState } from "react";
import './Layout.css'

export const Layout = () => {
    const [countTodo, setCountTodo] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const onChangeCountTodo = (newCount: number) => {
        setCountTodo(newCount);
    };

    const onChangeLoading = (loading: boolean) => {
        setIsLoading(loading);
    }


    return (
        <>
            <TodoCountContext.Provider value={{countTodo, onChangeCountTodo, isLoading, onChangeLoading}}>
                <header className='header'>
                    <nav className='nav'>
                        <ul className='nav__items'>
                            <li className='nav__item'><NavLink to="/">Главная</NavLink></li>
                            <li className='nav__item'><NavLink to="/post">Блог</NavLink></li>
                            <li className='nav__item'><NavLink to="/catalog">Каталог</NavLink></li>
                            <li className='nav__item'><NavLink to="/task">Список задач <span className="todo__count">{countTodo}</span></NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Outlet />
                {/* <footer>2024</footer> */}
            </TodoCountContext.Provider>
        </>
    )
}