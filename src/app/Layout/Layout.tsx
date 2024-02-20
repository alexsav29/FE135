import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { LayoutContext } from "../context/LayoutContext"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



export const Layout = () => {

    const [categories, setCategories] = useState<string[]>([]);

    const navigate = useNavigate();
    
    let currentCategory: string = '';
    const handleCategoryClick = (category: string) => {
        navigate(`../../main`);

        currentCategory = category;
        console.log(currentCategory);        
    };

    return (
            <LayoutContext.Provider value={{categories, setCategories, currentCategory}}>
                <header className='header'>
                    <nav className='nav'>
                        <ul className='nav__items'>
                            <li className='nav__item'><NavLink to="/">Главная</NavLink></li>
                            <li className='nav__item'><NavLink to="/post">Блог</NavLink></li>
                            <li className='nav__item'>
                                <NavLink to="/catalog">
                                    Каталог
                                    <ul className="catalog__items">
                                        {categories.map((category) => <li key={uuidv4()} onClick={() => handleCategoryClick(category)} className="catalog__menu__item">{category}</li> )}
                                    </ul>
                                </NavLink>
                            </li>
                            <li className='nav__item'><NavLink to="/task">Список задач</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Outlet />
                <footer>2024</footer>
            </LayoutContext.Provider>
           )
}


// Outlet - вместо себе динамически подставляет модуль